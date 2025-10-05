// @ts-check

/**
 * Implement the classes etc. that are needed to solve the
 * exercise in this file. Do not forget to export the entities
 * you defined so they are available for the tests.
 */

export class Size {
  constructor(width = 80, height = 60) {
    this.width = width;
    this.height = height;
  }

  resize(newWidth, newHeight) {
    this.width = newWidth;
    this.height = newHeight;
  }
}

export class Position {
  constructor(x = 0, y = 0) {
    this.x = x;
    this.y = y;
  }

  move(newX, newY) {
    this.x = newX;
    this.y = newY;
  }
}

export class ProgramWindow {
  constructor() {
    this.screenSize = new Size(800, 600);
    this.size = new Size();
    this.position = new Position();
  }

  resize(newSize) {
    const minWidth = 1;
    const minHeight = 1;

    const maxWidth = this.screenSize.width - this.position.x;
    const maxHeight = this.screenSize.height - this.position.y;

    const adjustedWidth = Math.max(minWidth, Math.min(newSize.width, maxWidth));
    const adjustedHeight = Math.max(minHeight, Math.min(newSize.height, maxHeight));

    this.size.resize(adjustedWidth, adjustedHeight);
  }

  move(newPosition) {
    const minX = 0;
    const minY = 0;
    const maxX = this.screenSize.width - this.size.width;
    const maxY = this.screenSize.height - this.size.height;

    const adjustedX = Math.max(minX, Math.min(newPosition.x, maxX));
    const adjustedY = Math.max(minY, Math.min(newPosition.y, maxY));

    this.position.move(adjustedX, adjustedY);
  }
}
export function changeWindow(window) {
  const newSize = new Size(400, 300);
  const newPosition = new Position(100, 150);

  window.resize(newSize);
  window.move(newPosition);

  return window;
}