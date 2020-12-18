import { css } from '@linaria/core';

export const cell = css`
  contain: strict;
  contain: size layout style paint;
  position: absolute;
  height: inherit;
  padding: 0 8px;
  border-right: 1px solid var(--border-color);
  border-bottom: 1px solid var(--border-color);
  background-color: inherit;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const cellClassname = `rdg-cell ${cell}`;

const cellFrozen = css`
  position: sticky;
  // Should have a higher value than 0 to show up above unfrozen cells
  z-index: 1;
`;

export const cellFrozenClassname = `rdg-cell-frozen ${cellFrozen}`;

export const cellFrozenLast = css`
  box-shadow: 2px 0 5px -2px rgba(136, 136, 136, .3);
`;

export const cellFrozenLastClassname = `rdg-cell-frozen-last ${cellFrozenLast}`;

const cellSelected = css`
  box-shadow: inset 0 0 0 2px var(--selection-color);
`;

export const cellSelectedClassname = `rdg-cell-selected ${cellSelected}`;

const cellCopied = css`
  background-color: #ccccff;
`;

export const cellCopiedClassname = `rdg-cell-copied ${cellCopied}`;

const cellDragHandle = css`
  cursor: move;
  position: absolute;
  right: 0;
  bottom: 0;
  width: 8px;
  height: 8px;
  background-color: var(--selection-color);

  &:hover {
    width: 16px;
    height: 16px;
    border: 2px solid var(--selection-color);
    background-color: var(--background-color);
  }
`;

export const cellDragHandleClassname = `rdg-cell-drag-handle ${cellDragHandle}`;

const cellDraggedOver = css`
  background-color: #ccccff;

  &.${cellCopied} {
    background-color: #9999ff;
  }
`;

export const cellDraggedOverClassname = `rdg-cell-dragged-over ${cellDraggedOver}`;

const cellEditing = css`
  padding: 0;
`;

export const cellEditingClassname = `rdg-cell-editing ${cellEditing}`;
