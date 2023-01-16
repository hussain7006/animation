import React from 'react'
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";


function ZoomImage() {
    return (
        <div>
            <TransformWrapper
                initialScale={1}
                initialPositionX={200}
                initialPositionY={100}
            >
                {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
                    <React.Fragment>
                        <div className="tools">
                            <button onClick={() => zoomIn()}>+</button>
                            <button onClick={() => zoomOut()}>-</button>
                            <button onClick={() => resetTransform()}>x</button>
                        </div>
                        <TransformComponent>
                            <img src="https://picsum.photos/500/500" alt="test" />
                            <div>Example text</div>
                        </TransformComponent>
                    </React.Fragment>
                )}
            </TransformWrapper>
        </div>
    )
}

export default ZoomImage
