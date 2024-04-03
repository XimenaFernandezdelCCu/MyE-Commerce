
// export default function Footer() {
//     return (
//       <div className="footer"  > 
      
//             
       

//       </div>
//     );
//   };

function Footer() {
  // Mock data for footer links
  const footerLinks = [
    { id: 1, title: 'About Us', url: '/about' },
    { id: 2, title: 'Contact', url: '/contact' },
    { id: 3, title: 'Terms and Conditions', url: '/terms' },
    { id: 4, title: 'Privacy Policy', url: '/privacy' }
  ];

  return (
    <footer className="footer">
      <h1 className="title" >MARKETFY</h1>
      <div className="footer-container flex found">
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            {footerLinks.map(link => (
              <li key={link.id}>
                <a className="HeaderLink" href={link.url}>{link.title}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="footer-section">
          <h3>Stay Connected</h3>
          <p>Follow us on social media</p>
          {/* Add social media icons and links here */}
        </div>
        <div className="footer-section">
          <h3>Subscribe to Newsletter</h3>
          <p>Stay updated with our latest offers and promotions</p>
          {/* Add newsletter subscription form here */}
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Marketfy Bookstore. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;