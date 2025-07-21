export default function SEO() {
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
      <h1 style={styles.title}>SEO Services</h1>
      <p style={styles.description}>
        Our SEO services help your website rank higher, drive more organic traffic, 
        and boost your online presence through proven optimization techniques.
      </p>

      <ul style={styles.features}>
        <li style={styles.featureItem}>Keyword Research & Optimization</li>
        <li style={styles.featureItem}>Technical SEO Audits</li>
        <li style={styles.featureItem}>Content Strategy & On-Page SEO</li>
        <li style={styles.featureItem}>Backlink Building</li>
        <li style={styles.featureItem}>Performance & Analytics Reports</li>
      </ul>
    </div>
  );
}
