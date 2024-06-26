import { useRef, useState, SetStateAction, Dispatch, MutableRefObject } from "react";

const isFunction = <S>(setStateAction: SetStateAction<S>): setStateAction is (prevState: S) => S =>
  typeof setStateAction === "function";

function useStateRef<S>(initialState: S): [S, Dispatch<SetStateAction<S>>, MutableRefObject<S>] {
  const [state, setState] = useState(initialState);
  const ref = useRef(initialState);

  const dispatch: Dispatch<SetStateAction<S>> = (setStateAction: S | ((state: S) => S)) => {
    ref.current = isFunction(setStateAction) ? setStateAction(ref.current) : setStateAction;

    setState(ref.current);
  };

  return [state, dispatch, ref];
}

export { useStateRef };
