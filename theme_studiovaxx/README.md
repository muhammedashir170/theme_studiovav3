# Studiova - Website Theme for Odoo 18

Copyright and License
---------------------
* Copyright XAPP.

A sophisticated and fully responsive website theme designed for creative agencies, portfolios, corporate businesses, and professional service providers.

![Studiova Theme](static/description/studiova.gif)

## 🌟 Features

### Design Components
- **Dynamic Hero Banner** - Eye-catching hero section with video background support
- **Stats & Facts** - Impressive statistics showcase with animated counters
- **Services Grid** - Beautiful card-based services display with hover effects
- **Featured Projects** - Portfolio gallery with filtering capabilities
- **Pricing Tables** - Flexible pricing plans display
- **FAQ Section** - Accordion-style frequently asked questions
- **Team Members** - Showcase your team with professional profiles
- **Testimonials** - Client reviews carousel
- **Contact Form** - Integrated get-in-touch section

### Technical Features
- ✅ Fully Responsive Design (Mobile, Tablet, Desktop)
- ✅ Drag & Drop Website Builder Compatible
- ✅ Smooth Scroll Animations (AOS Integration)
- ✅ Fast Loading Performance
- ✅ Clean & Maintainable Code
- ✅ No External Dependencies
- ✅ Cross-browser Compatible

## 📋 Requirements

- Odoo 18.0+
- Website Module (built-in)
- Web Editor Module (built-in)

## 🚀 Installation

### Method 1: Through Odoo Apps (Recommended)
1. Go to **Apps** in your Odoo instance
2. Click **Update Apps List**
3. Search for "Studiova"
4. Click **Install**

### Method 2: Manual Installation
1. Download the module
2. Extract to your Odoo addons directory:
   ```bash
   /path/to/odoo/addons/studiova/
   ```
3. Update the apps list:
   ```bash
   ./odoo-bin -u all -d your_database
   ```
4. Install from Apps menu

## 🎨 Usage

### Getting Started
1. After installation, go to **Website** menu
2. Click **Edit** to enter Website Builder mode
3. Click on **Blocks** (+ icon) in the left sidebar
4. Drag and drop desired sections to your page

### Available Snippet Collections

#### Home Snippets
- Hero Banner
- Stats and Facts
- Services Section
- Featured Projects
- Why Choose Us
- Testimonials
- Pricing Plans
- FAQ
- Get in Touch

#### About Snippets
- Sub Banner
- About Content
- About Image with Moving Text
- Meet Our Team

#### Projects Snippets
- Project Banner
- Featured Projects Gallery

#### Contact Snippets
- Contact Banner
- Get in Touch Form

### Customization
All sections are fully customizable through the Odoo Website Builder:
- Edit text directly by clicking on it
- Change images by clicking on them
- Modify colors through the theme customizer
- Adjust layouts using drag & drop
- Add/remove sections as needed

## 📁 Module Structure

```
studiova/
├── __init__.py
├── __manifest__.py
├── README.md
├── static/
│   ├── description/          # App Store assets
│   └── src/
│       ├── css/              # Stylesheets
│       ├── js/               # JavaScript files
│       └── img/              # Theme images
└── views/                    # XML templates
```

## 🎯 Perfect For

- Creative Agencies
- Digital Studios
- Web Design Companies
- Marketing Agencies
- Portfolio Websites
- Corporate Websites
- Professional Service Providers
- Freelancers & Consultants

## 🛠️ Technical Details

### CSS Architecture
- Modular CSS files for each component
- Responsive design with mobile-first approach
- Clean and maintainable code structure
- Optimized for performance

### JavaScript Implementation
- Vanilla JavaScript (no jQuery)
- Event delegation for better performance
- Smooth animations and interactions
- Lightweight and fast

### Browser Support
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## 📝 Changelog

### Version 18.0.1.0.0 (Current)
- Initial release for Odoo 18
- Modern responsive design
- 15+ pre-built sections
- Full Website Builder integration
- Smooth animations

## 💡 Tips & Best Practices

1. **Image Optimization**: Use optimized images (WebP format recommended) for better performance
2. **Content Planning**: Plan your content before adding sections
3. **Mobile Testing**: Always test on mobile devices
4. **Color Consistency**: Use the theme's color palette for consistency
5. **Regular Backups**: Backup your website before major changes

## 🐛 Known Issues

No known issues at this time.

## 📞 Support

For questions, issues, or feature requests:

- **Email**: teamxapp.dev@gmail.com
- **Website**: -----
- **Documentation**: Included in module

## 👨‍💻 Credits

Developed by **XAPP**

## 📄 License

This module is licensed under the Odoo Proprietary License v1.0 (OPL-1).

See [LICENSE](https://www.odoo.com/documentation/user/18.0/legal/licenses/licenses.html#odoo-apps) for more details.

## ⚠️ Disclaimer

This theme is provided "as is" without warranty of any kind. Always test in a development environment before deploying to production.

---

**Enjoy building beautiful websites with Studiova! 🚀**

For more themes and modules, visit our website.

