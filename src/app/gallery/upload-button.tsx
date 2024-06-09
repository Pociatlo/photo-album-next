"use client"
import {CldUploadButton, CloudinaryUploadWidgetInfo, CloudinaryUploadWidgetResults} from "next-cloudinary";
import {useState} from "react";
import {Button} from "@/components/ui/button";
import {useRouter} from "next/navigation";

export default function UploadButton() {
    const router = useRouter();
    const [imageId, setImageId] = useState<string>('');
    return <section>
            <Button asChild>
                    <CldUploadButton
                        uploadPreset="dvj6kkpn"
                        onSuccess={(result: CloudinaryUploadWidgetResults) => {
                            if (result.info) {
                                const publicId = (result.info as CloudinaryUploadWidgetInfo).public_id;
                                setImageId(publicId);
                            }
                            setTimeout(()=>{
                                console.log('refresh')
                                router.refresh();
                            }, 2000);
                        }

                    }

                    >
                        <div className="flex gap-2 items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                                 stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                      d="M9 8.25H7.5a2.25 2.25 0 0 0-2.25 2.25v9a2.25 2.25 0 0 0 2.25 2.25h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25H15m0-3-3-3m0 0-3 3m3-3V15"/>
                            </svg>
                            Upload
                        </div>
                    </CldUploadButton>
            </Button>
    </section>;
}