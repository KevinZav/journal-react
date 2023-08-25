
export const fileUpload = async(file: File) => {
  const cloudUrl = `https://api.cloudinary.com/v1_1/dopa3kvdt/upload`;
  const formData: FormData = new FormData();
  formData.append('upload_preset', 'fqgf9wqs');
  formData.append('file', file);

  try {
    const resp = await fetch(cloudUrl,{
      method: 'POST',
      body: formData
    });
    if (!resp.ok) throw new Error(`Failed to upload file`)

    const cloudRespose = await resp.json();
    return cloudRespose.url;
  } catch(error) {
    console.log(error);
  }

}