import { useEffect, useRef } from "react";
import AutoNumeric from "autonumeric";

export function useAutoNumericGroup(refsObject, config) {
    const instancesRef = useRef({});

    useEffect(() => {
        for (const key in refsObject) {
            if (!instancesRef.current[key] && refsObject[key]?.current) {
                // Crear AutoNumeric directamente
                instancesRef.current[key] = new AutoNumeric(
                    refsObject[key].current,
                    config
                );
            }
        }

        return () => {
            for (const key in instancesRef.current) {
                instancesRef.current[key].remove();
            }
        };
    }, [refsObject, config]);

    return instancesRef.current;
}
