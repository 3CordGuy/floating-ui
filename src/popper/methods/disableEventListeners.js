import removeEventListeners from '../utils/removeEventListeners';

/**
 * it will remove resize/scroll events and won't recalculate
 * popper position when they are triggered. It also won't trigger onUpdate callback anymore,
 * unless you call 'update' method manually.
 * @method
 * @memberof Popper
 */
export default function disableEventListeners() {
  if (this.state.eventsEnabled) {
    window.cancelAnimationFrame(this.scheduleUpdate);
    this.state = removeEventListeners(this.reference, this.state);
  }
}