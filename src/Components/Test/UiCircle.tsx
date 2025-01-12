import { Circle, Group } from 'react-konva';

interface Props {
    /** Координата начала X. */
    x: number;
    /** Координата начала Y. */
    y: number;
    /** Радиус окружности. */
    radius: number;
    /** Смещение по X. */
    offsetX?: number;
    /** Смещение по Y. */
    offsetY?: number;
}

/** Круг. */
export const UiCircle = (props: Props) => {
    return (
        <Group x={props.x} y={props.y} offsetX={props.offsetX} offsetY={props.offsetY}>
            <Circle x={props.radius} y={props.radius} radius={props.radius} stroke="black" />
        </Group>
    );
};

UiCircle.displayName = 'UiCircle';