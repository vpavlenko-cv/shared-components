import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { noop } from 'lodash';

class Selectable extends React.Component {
  static propTypes = {
    /**
     * Render prop to render the selectable items. Supports the following props:
     *
     * *selectItem*: A function that should be invoked with a unique key as its argument whenever an item should be selected.
     *
     * *deselectItem*: A function that should be invoked with a unique key as its argument whenever an item should be deselected.
     *
     * *toggleItem*: A function that should be invoked with a unique key as its argument whenever an item should be toggled.
     *
     * *selected*: A **Set** of selected items represented by their key values.
     */
    render: PropTypes.func,
    /**
     * Callback for when an item is selected. Passed one argument, which is the key of the item that was selected.
     */
    onItemSelected: PropTypes.func,
    /**
     * Callback for when an item is deselected. Passed one argument, which is the key of the item that was deselected.
     */
    onItemDeselected: PropTypes.func,
  };
  state = { selected: new Set() };

  static defaultProps = {
    render: noop,
    onItemSelected: noop,
    onItemDeselected: noop,
  };

  selectItem = key => {
    const { props: { onItemSelected }, state: { selected } } = this;
    if (selected.has(key)) {
      return;
    }
    onItemSelected(key);
    this.setState(state => ({
      selected: state.selected.add(key),
    }));
  };

  deselectItem = key => {
    const { props: { onItemDeselected }, state: { selected } } = this;
    if (!selected.has(key)) {
      return;
    }
    onItemDeselected(key);
    this.setState(state => {
      state.selected.delete(key);
      return { selected: state.selected };
    });
  };

  toggleItem = key => {
    const { state: { selected }, selectItem, deselectItem } = this;
    selected.has(key) ? deselectItem(key) : selectItem(key);
  };

  render() {
    const {
      props: { render },
      state: { selected },
      selectItem,
      deselectItem,
      toggleItem,
    } = this;
    return render({
      selectItem,
      deselectItem,
      toggleItem,
      selected,
    });
  }
}

export default Selectable;
