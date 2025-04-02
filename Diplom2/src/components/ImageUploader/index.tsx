import React, { useState } from "react";

interface ImageUploadProps {
  onChange: (url: string) => void;
}

const ImageUpload = ({ onChange }: ImageUploadProps) => {
  const [image, setImage] = useState(null);
  const [previewUrl, setPreviewUrl] = useState<any>();

  const handleImageChange = async (e: any) => {
    const file = e.target.files[0];

    const formData = new FormData();

    if (file) {
      formData.append("image", file);
      console.log(file);
      debugger;
    }
  };

  return (
    <>
      <label htmlFor="imageUpload">Загрузите изображение:</label>
      <input
        id="imageUpload"
        type="file"
        accept="image/*"
        onChange={handleImageChange}
      />
      {previewUrl && (
        <div>
          <h3>Предварительный просмотр:</h3>
          <img
            src={previewUrl}
            alt="Предварительный просмотр"
            style={{ width: "200px", height: "auto" }}
          />
        </div>
      )}
    </>
  );
};

export default ImageUpload;
