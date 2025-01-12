import { useEffect, useState } from 'react';
import { Group, Layer, Stage } from 'react-konva';

//import { UiCircle } from '@/shared/ui';

import { PositionPatterSide } from './SmallPattern.definition';
import { UiCircle } from './UiCircle';

interface Props {
    /** Ширина. */
    width: number;
    /** Высота. */
    height: number;
    /** Позиционирование элемента. */
    position?: PositionPatterSide;
}

/** Паттерн миниатюры петли. */
export const HingeSmallPattern = ({ position = 'vertical-l', ...props }: Props) => {
    const [layerX, setLayerX] = useState<number>(0);
    const [layerY, setLayerY] = useState<number>(0);
    const [rotation, setRotation] = useState<number>(0);

    const radius = 35;
    const radiusSmall = 3;
    const offsetCircleSmallX = 6 * 2; // умножаем на 2 так как считаем не по диаметру, а по радиусу (который увеличили в 2 раза)
    const offsetCircleY = 24 * 2; // умножаем на 2 так как считаем не по диаметру, а по радиусу (который увеличили в 2 раза)

    useEffect(() => {
        switch (position) {
            case 'vertical-l':
                setLayerX(0);
                setLayerY(props.height / 2);
                setRotation(0);
                break;
            case 'horizontal-t':
                setLayerX(props.width / 2);
                setLayerY(0);
                setRotation(90);
                break;
            case 'vertical-r':
                setLayerX(props.width);
                setLayerY(props.height / 2);
                setRotation(180);
                break;
            case 'horizontal-b':
                setLayerX(props.width / 2);
                setLayerY(props.height);
                setRotation(270);
                break;
        }
    }, [props.height, props.width, position]);

    return (
        <Stage width={props.width} height={props.height}>
            <Layer
                x={layerX}
                y={layerY}
                offsetY={offsetCircleY + radiusSmall}
                rotation={rotation}
                scaleX={(props.width * 1.5) / 360}
                scaleY={(props.height * 1.5) / 390}
            >
                <Group x={20} y={0}>
                    <UiCircle x={radius + offsetCircleSmallX} y={0} offsetX={radiusSmall} radius={radiusSmall} />
                    <UiCircle x={0} y={offsetCircleY + radiusSmall} offsetY={radius} radius={radius} />
                    <UiCircle x={radius + offsetCircleSmallX} y={offsetCircleY * 2} offsetX={radiusSmall} radius={radiusSmall} />
                </Group>
            </Layer>
        </Stage>
    );
};

HingeSmallPattern.displayName = 'HingeSmallPattern';