export default function Consulting() {
  const styles = {
    serviceContainer: {
      maxWidth: '800px',
      margin: '0 auto',
      padding: '60px 20px',
      textAlign: 'center',
      background: 'linear-gradient(135deg, #fafafa, #f3f4f6)',
      borderRadius: '10px',
      boxShadow: '0 4px 10px rgba(0,0,0,0.05)',
      fontFamily: 'Arial, sans-serif'
    },
    title: {
      fontSize: '2.5rem',
      color: '#222',
      marginBottom: '15px',
      fontWeight: '700'
    },
    description: {
      fontSize: '1.1rem',
      color: '#555',
      marginBottom: '30px',
      lineHeight: '1.6'
    },
    features: {
      listStyle: 'none',
      padding: 0,
      margin: '0 auto',
      maxWidth: '400px',
      textAlign: 'left'
    },
    featureItem: {
      fontSize: '1rem',
      padding: '10px 0',
      borderBottom: '1px solid #ddd',
      color: '#333'
    }
  };

  return (
    <div style={styles.serviceContainer}>
      <h1 style={styles.title}>Consulting Services</h1>
      <p style={styles.description}>
        Our consulting services help businesses streamline operations, adopt modern technologies, 
        and achieve measurable growth through strategic guidance.
      </p>

      <ul style={styles.features}>
        <li style={styles.featureItem}>Business Strategy & Planning</li>
        <li style={styles.featureItem}>Digital Transformation Consulting</li>
        <li style={styles.featureItem}>Technology & Process Optimization</li>
        <li style={styles.featureItem}>Cloud & Infrastructure Advisory</li>
        <li style={styles.featureItem}>Ongoing Support & Mentorship</li>
      </ul>
    </div>
  );
}
