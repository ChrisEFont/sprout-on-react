import { useEffect, useRef } from "react";
import AutoNumeric from "autonumeric";

export function useAutoNumeric(inputRef, config) {
    const instanceRef = useRef(null);

    useEffect(() => {
        if (!instanceRef.current) {
            instanceRef.current = new AutoNumeric(inputRef.current, config);
        }

        return () => {
            if (instanceRef.current) {
                instanceRef.current.remove();
                instanceRef.current = null;
            }
        };
    }, [inputRef, config]);

    return instanceRef;
}
