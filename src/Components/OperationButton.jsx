import { ACTIONS } from "../App";

export default function OperationButton({
  dispatch,
  operation,
  id,
  className,
}) {
  return (
    <button
      onClick={() =>
        dispatch({ type: ACTIONS.CHOOSE_OPERATION, payload: { operation } })
      }
      id={id}
      className={className}
    >
      {operation}
    </button>
  );
}
