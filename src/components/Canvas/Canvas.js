import React, { useEffect, useRef, useState } from 'react';
import './canvas.css';

function Canvas() {
    // Create a ref to access the canvas element
    const canvasRef = useRef(null);

    // Set up the state for the zoom value
    const [zoom, setZoom] = useState(1);

    // Set up the canvas dimensions
    const canvasWidth = 500;
    const canvasHeight = 500;

    // Set the fixed zoom value
    const fixedZoom = 2;

    // Set the marker positions
    const markerPositions = [
        { x: 100, y: 100 },
        { x: 200, y: 200 },
        { x: 300, y: 300 },
    ];
    // Function to draw the image and markers on the canvas
    const drawImageAndMarkers = (context, zoom) => {
        // Create an image element
        const image = new Image();

        // Set the source of the image
        image.src = 'https://picsum.photos/500/500';

        // Draw the image and markers on the canvas once the image has loaded
        image.onload = () => {
            context.drawImage(image, 0, 0, canvasWidth, canvasHeight);
            markerPositions.forEach((position) => {
                context.beginPath();
                context.arc(position.x, position.y, 10, 0, 2 * Math.PI);
                context.stroke();
            });
        };
    };
    // // Function to handle zoom and pan
    // const handleZoomAndPan = (x, y) => {

    //     // Calculate the distance between the zoom position and the center of the canvas
    //     const xDistance = x - canvasWidth / 2;
    //     const yDistance = y - canvasHeight / 2;

    //     // Get the canvas and context
    //     const canvas = canvasRef.current;
    //     const context = canvas.getContext('2d');

    //     // Clear the canvas
    //     context.clearRect(0, 0, canvasWidth, canvasHeight);

    //     // Set the zoom level to the original value (1)
    //     setZoom(1);

    //     // Draw the image on the canvas at the original zoom level
    //     drawImageAndMarkers(context, zoom);


    //     // Save the current canvas state
    //     // context.save();

    //     // Translate the canvas so that the zoom position is at the center of the canvas
    //     // context.translate(xDistance, yDistance);

    //     // Apply the zoom level
    //     context.scale(fixedZoom, fixedZoom);

    //     // Translate the canvas back to its original position, taking into account the zoom level
    //     // context.translate(-xDistance, -yDistance);

    //     // Clear the canvas
    //     context.clearRect(0, 0, canvasWidth, canvasHeight);

    //     // Set the zoom level
    //     setZoom(fixedZoom);

    //     // Draw the image and markers on the canvas
    //     drawImageAndMarkers(context, zoom);

    //     // Restore the canvas state
    //     // context.restore();
    // };


    // Function to handle zoom and pan
    const handleZoomAndPan = (x, y) => {
        // Get the canvas and context
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');

        // Clear the canvas
        context.clearRect(0, 0, canvasWidth, canvasHeight);

        // Set the zoom level to the original value (1)
        setZoom(1);

        // Draw the image on the canvas at the original zoom level
        drawImageAndMarkers(context, zoom);

        // Calculate the distance between the zoom position and the center of the canvas
        const xDistance = x - canvasWidth / 2;
        const yDistance = y - canvasHeight / 2;

        // Save the current canvas state
        context.save();

        // Translate the canvas so that the zoom position is at the center of the canvas
        context.translate(xDistance, yDistance);

        // Apply the zoom level
        context.scale(fixedZoom, fixedZoom);

        // Translate the canvas back to its original position, taking into account the zoom level
        context.translate(-xDistance, -yDistance);

        // Clear the canvas
        context.clearRect(0, 0, canvasWidth, canvasHeight);

        // Set the zoom level
        setZoom(fixedZoom);

        // Draw the image on the canvas
        drawImageAndMarkers(context, zoom);

        // Restore the canvas state
        context.restore();
    };

    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');

        // Set up the canvas dimensions
        canvas.width = canvasWidth;
        canvas.height = canvasHeight;

        // Set the transformation for the canvas
        context.setTransform(1, 0, 0, 1, 0, 0);

        // Draw the image and markers on the canvas
        drawImageAndMarkers(context, zoom);
    }, []);

    return (
        <div className="App">
            <canvas ref={canvasRef} />
            {markerPositions.map((position, index) => (
                <button key={index} onClick={() => handleZoomAndPan(position.x, position.y)}>
                    Zoom to marker {index + 1}
                </button>
            ))}
        </div>
    )
}

export default Canvas
