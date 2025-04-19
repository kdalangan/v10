import React, { useState } from 'react';

const CapturePCBPage   = () => {
  const [testImage, setTestImage] = useState(null);
  const [templateImage, setTemplateImage] = useState(null);
  const [testFileName, setTestFileName] = useState("No file chosen");
  const [templateFileName, setTemplateFileName] = useState("No file chosen");

  const handleTestImageChange = (e) => {
    setTestImage(e.target.files[0]);
    setTestFileName(e.target.files[0]?.name || "No file chosen");
  };

  const handleTemplateImageChange = (e) => {
    setTemplateImage(e.target.files[0]);
    setTemplateFileName(e.target.files[0]?.name || "No file chosen");
  };

  const handleUpload = async (e) => {
    e.preventDefault();

    if (!testImage || !templateImage) {
      alert("Please select both Test and Template images.");
      return;
    }

    const formData = new FormData();
    formData.append("test_image", testImage);
    formData.append("temp_image", templateImage);

    try {
      const response = await fetch("http://localhost:5173/upload", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();
      console.log("Server response:", result);
      alert("Upload successful!");
    } catch (error) {
      console.error("Error uploading files:", error);
      alert("Upload failed!");
    }
  };

  const styles = {
    // ... (keep all your styles here from your original code)
    // You can paste the full styles object as is from your current `CapturePCBPage`
  };

  return (
    <div style={styles.container}>
      {/* Header */}
      <div style={styles.header}>
        <div style={styles.headerContent}>
          <div style={styles.logo}>
            <div style={styles.logoIcon}>
              <div style={styles.logoLines}></div>
            </div>
            <div style={styles.brandName}>PXRT</div>
          </div>
          <nav style={styles.navBar}>
            <div style={styles.navItem}>HOME</div>
            <div style={styles.activeNavItem}>CAPTURE or UPLOAD PCB</div>
            <div style={styles.navItem}>FEEDBACK</div>
            <div style={styles.navItem}>SIMULATE CONTINUITY</div>
          </nav>
        </div>
      </div>

      {/* Yellow Divider */}
      <div style={styles.divider}></div>

      {/* Main Content */}
      <div style={styles.mainContent}>
        {/* Left Section - Capture PCB */}
        <div style={styles.captureSection}>
          <div style={styles.grid}>
            {[...Array(9)].map((_, index) => (
              <div key={index} style={styles.gridItem}></div>
            ))}
          </div>
          <button style={styles.captureButton}>CAPTURE PCB</button>
        </div>

        {/* Right Section - Upload PCB */}
        <form onSubmit={handleUpload} style={styles.uploadSection}>
          <div style={styles.uploadContainer}>
            {/* Test Image */}
            <div style={styles.imageSection}>
              <h3 style={styles.sectionTitle}>Test Image:</h3>
              <div style={styles.fileUploadArea}>
                <label style={styles.chooseFileButton}>
                  CHOOSE FILE
                  <input
                    type="file"
                    name="test_image"
                    accept="image/*"
                    required
                    onChange={handleTestImageChange}
                    style={{ display: 'none' }}
                  />
                </label>
                <span style={styles.fileStatus}>{testFileName}</span>
              </div>
            </div>

            {/* Template Image */}
            <div style={styles.imageSection}>
              <h3 style={styles.sectionTitle}>Template Image:</h3>
              <div style={styles.fileUploadArea}>
                <label style={styles.chooseFileButton}>
                  CHOOSE FILE
                  <input
                    type="file"
                    name="temp_image"
                    accept="image/*"
                    required
                    onChange={handleTemplateImageChange}
                    style={{ display: 'none' }}
                  />
                </label>
                <span style={styles.fileStatus}>{templateFileName}</span>
              </div>
            </div>
          </div>
          <button type="submit" style={styles.uploadButton}>UPLOAD PCB</button>
        </form>
      </div>

      {/* Footer */}
      <div style={styles.footer}></div>
    </div>
  );
};

export default CapturePCBPage;
