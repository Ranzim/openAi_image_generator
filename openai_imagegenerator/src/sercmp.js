import React, { useState } from 'react';
import ImageDisplay from './ImageDisplay';
import TextDescription from './TextDescription';

const ImageGenerator = () => {
    const [description, setDescription] = useState('');
    const [imageUrl, setImageUrl] = useState('');

    const generateImage = async () => {
        try {
            const response = await fetch(`https://api.openai.com/v1/images/generations`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer YOUR_OPENAI_API_KEY`
                },
                body: JSON.stringify({
                    prompt: description
                })
            });

            const data = await response.json();
            setImageUrl(data.data[0].url);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
        <div className="container p-5">
         
            <TextDescription description={description} setDescription={setDescription} />
            <button onClick={generateImage}>Generate Image</button>
            {imageUrl && <ImageDisplay imageUrl={imageUrl} />}
            </div>
        </div>
    );
};

export default ImageGenerator;
