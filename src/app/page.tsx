"use client"
import { useState } from "react";
import { CldUploadButton, CldImage, CloudinaryUploadWidgetResults, CloudinaryUploadWidgetInfo } from 'next-cloudinary';

export default function Home() {
    const [imageId, setImageId] = useState<string>('');
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <CldUploadButton
                uploadPreset="dvj6kkpn"
                onSuccess={(result: CloudinaryUploadWidgetResults) => {
                    if (result.info) {
                        const publicId = (result.info as CloudinaryUploadWidgetInfo).public_id;
                        setImageId(publicId);
                    }
                }}
            />
            {imageId && (
                <CldImage
                    width="960"
                    height="600"
                    src={imageId}
                    sizes="100vw"
                    alt="Description of my image"
                />
            )}
        </main>
    );
}
