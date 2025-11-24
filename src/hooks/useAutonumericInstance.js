import { useEffect, useRef } from "react";
import AutoNumeric from "autonumeric";

export function useAutoNumericInstance(inputRef, config) {
    const instanceRef = useRef(null);

    useEffect(() => {
        // si el input todavía no existe → NO inicializar
        if (!inputRef?.current) return;
        // si la config es inválida → NO inicializar
        if (!config || typeof config !== 'object') return;

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
