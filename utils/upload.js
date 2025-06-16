import axios from 'axios'

export const handleFileUpload = async (e,refreshCallback) => {
  const file = e.target.files[0];
  if (!file) return;

  const formData = new FormData();
  formData.append("file", file);

  try {
     await axios.post("http://localhost:5000/api/leads/import-excel", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    
    if(typeof refreshCallback == "function"){
      refreshCallback()
    }

    alert("✅ Users imported successfully!");

    // Optional: reload user list
    // fetchUsers();
  } catch (err) {
    console.error("❌ Import error:", err);
    alert("❌ Failed to import users.");
  }
};
