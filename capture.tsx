import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const CapturePCBPage = () => {
  const [testFile, setTestFile] = useState<File | null>(null);
  const [templateFile, setTemplateFile] = useState<File | null>(null);
  const testFileInputRef = useRef<HTMLInputElement>(null);
  const templateFileInputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const handleTestFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setTestFile(e.target.files[0]);
    }
  };

  const handleTemplateFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setTemplateFile(e.target.files[0]);
    }
  };

  const handleNavigation = (path: string) => {
    navigate(path);
  };

  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      height: '100vh',
      width: '100vw',
      margin: 0,
      padding: 0,
      overflow: 'hidden',
      backgroundColor: 'white',
      fontFamily: 'Arial, sans-serif',
    },
    header: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '.10px 30px',
      backgroundColor: 'white',
      position: 'fixed',       // 🧷 Keeps it on top
      top: 0,                  // ⬆️ Stick to the top
      left: 0,
      right: 0,
      zIndex: 1000,            // 🔝 Keep above other content
      height: '80px',          // 📏 Optional: Define height

    },
    
    logoContainer: {
      display: 'flex',
      alignItems: 'center',
      cursor: 'pointer',
    },
    logo: {
      marginTop: '10px',
      width: '100px',
      height: '100px',
      borderRadius: '8px',
      position: 'relative',
    },
    brandName: {
      fontSize: '24px',
      fontWeight: 'bold',
      marginLeft: '10px',
    },
    navBar: {
      backgroundColor: '#4a4a4a',
      borderRadius: '50px',
      display: 'flex',
      padding: '5px',
    },
    navItem: {
      padding: '10px 20px',
      fontWeight: '500',
      cursor: 'pointer',
      transition: 'color 0.3s ease',
      color: 'white',
      zIndex: 1,
    },
    activeNavItem: {
      backgroundColor: 'white',
      color: 'black',
      padding: '10px 20px',
      borderRadius: '50px',
      fontWeight: '500',
      cursor: 'pointer',
    },
    divider: {
      height: '10px',
      backgroundColor: '#ffc107',
      width: '100%',
      marginTop: '10px',
    },
    contentContainer: {
      display: 'flex',
      justifyContent: 'space-around',
      alignItems: 'center',
      padding: '40px 20px',
      flexGrow: 1,
    },
    captureSection: {
      backgroundColor: '#ffd700',
      borderRadius: '40px',
      padding: '40px',
      width: '45%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    uploadSection: {
      backgroundColor: '#ffd700',
      borderRadius: '40px',
      padding: '40px',
      width: '45%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gridGap: '20px',
      marginBottom: '30px',
      width: '100%',
    },
    gridItem: {
      backgroundColor: '#e0e0e0',
      aspectRatio: '1/1',
      borderRadius: '5px',
    },
    captureButton: {
      backgroundColor: '#4a4a4a',
      color: 'white',
      padding: '12px 35px',
      borderRadius: '50px',
      border: 'none',
      fontWeight: 'bold',
      cursor: 'pointer',
      fontSize: '16px',
      marginTop: '20px',
    },
    uploadContainer: {
      width: '100%',
    },
    sectionTitle: {
      fontSize: '22px',
      fontWeight: 'bold',
      marginBottom: '15px',
      textAlign: 'left',
      width: '100%',
    },
    fileUploadArea: {
      backgroundColor: '#e0e0e0',
      borderRadius: '10px',
      padding: '20px',
      display: 'flex',
      alignItems: 'center',
      marginBottom: '30px',
      width: '100%',
    },
    chooseFileButton: {
      backgroundColor: '#4a4a4a',
      color: 'white',
      padding: '10px 20px',
      borderRadius: '50px',
      border: 'none',
      cursor: 'pointer',
      marginRight: '15px',
    },
    fileStatus: {
      color: '#666',
    },
    uploadButton: {
      backgroundColor: '#4a4a4a',
      color: 'white',
      padding: '12px 35px',
      borderRadius: '50px',
      border: 'none',
      fontWeight: 'bold',
      cursor: 'pointer',
      fontSize: '16px',
      marginTop: '20px',
    },
    hiddenFileInput: {
      display: 'none',
    }
  };

  return (
    <div style={styles.container as React.CSSProperties}>
      {/* Header with Logo and Nav */}
      <header style={styles.header as React.CSSProperties}>
        <div 
          style={styles.logoContainer}
          onClick={() => handleNavigation('/')}
        >
          <div style={styles.logo as React.CSSProperties}>
            <img src="src/assets/pxrt.png" alt="Logo" style={{ width: '100%', height: 'auto' }} />
          </div>
          <div style={styles.brandName}>PXRT</div>
        </div>

        <nav style={styles.navBar}>
          <div 
            style={styles.navItem}
            onClick={() => handleNavigation('/')}
          >
            HOME
          </div>
          <div 
            style={styles.activeNavItem}
            onClick={() => handleNavigation('/capture')}
          >
            CAPTURE or UPLOAD PCB
          </div>
          <div 
            style={styles.navItem}
            onClick={() => handleNavigation('/feedback')}
          >
            FEEDBACK
          </div>
          <div 
            style={styles.navItem}
            onClick={() => handleNavigation('/simulate')}
          >
            SIMULATE CONTINUITY
          </div>
        </nav>
      </header>

      {/* Yellow Divider */}
      <div style={styles.divider}></div>

      {/* Main Content */}
      <div style={styles.contentContainer}>
        {/* Left Section - Capture PCB */}
        <div style={styles.captureSection as React.CSSProperties}>
          <div style={styles.grid}>
            {[...Array(9)].map((_, index) => (
              <div key={index} style={styles.gridItem}></div>
            ))}
          </div>
          <button style={styles.captureButton}>CAPTURE PCB</button>
        </div>

        {/* Right Section - Upload PCB */}
        <div style={styles.uploadSection as React.CSSProperties}>
          <div style={styles.uploadContainer}>
            {/* Test Image */}
            <h3 style={styles.sectionTitle as React.CSSProperties}>Test Image:</h3>
            <div style={styles.fileUploadArea}>
              <input
                type="file"
                onChange={handleTestFileChange}
                ref={testFileInputRef}
                style={styles.hiddenFileInput}
                accept="image/*"
              />
              <button 
                style={styles.chooseFileButton}
                onClick={() => testFileInputRef.current && testFileInputRef.current.click()}
              >
                CHOOSE FILE
              </button>
              <span style={styles.fileStatus}>
                {testFile ? testFile.name : 'No file chosen'}
              </span>
            </div>

            {/* Template Image */}
            <h3 style={styles.sectionTitle as React.CSSProperties}>Template Image:</h3>
            <div style={styles.fileUploadArea}>
              <input
                type="file"
                onChange={handleTemplateFileChange}
                ref={templateFileInputRef}
                style={styles.hiddenFileInput}
                accept="image/*"
              />
              <button 
                style={styles.chooseFileButton}
                onClick={() => templateFileInputRef.current?.click()}
              >
                CHOOSE FILE
              </button>
              <span style={styles.fileStatus}>
                {templateFile ? templateFile.name : 'No file chosen'}
              </span>
            </div>
          </div>
          <button style={styles.uploadButton}>UPLOAD PCB</button>
        </div>
      </div>
    </div>
  );
};

export default CapturePCBPage;
