# -*- coding: utf-8 -*-
# Developed by XAPP.
{
    'name': 'Studiovax',
    'category': 'Theme',
    'version': '18.0.2.0.0',
    'sequence': 1,
    'author': 'XAPP',
    'summary': """The full potential of your online presence with this modern and fully customizable Odoo website theme—crafted specifically for creative agencies, digital studios, freelancers, portfolios, corporate companies, startups, and consulting firms.
                    With a clean visual identity, intuitive layout system, and pixel-perfect design, this theme makes it effortless to build a stunning website that reflects your brand’s personality.""",

    'description': """
        Studiova - Website Theme for Odoo 18

        A sophisticated and fully responsive website theme designed for creative agencies,
        portfolios, corporate businesses, and professional service providers.

        Support:
        -
        For any questions or support, please contact.
    """,
    'license': 'OPL-1',
    'support': 'teamxapp.dev@gmail.com',
    'price': 38.00,
    'currency': 'USD',

    'depends': [
        'website',
        'web_editor',
        'crm',
    ],

    'data': [
        "views/st_header.xml",
        "views/st_footer.xml",
        "views/studiova_banner.xml",
        "views/stats_and_facts.xml",
        "views/services.xml",
        "views/featured_projects.xml",
        "views/pricing.xml",
        "views/why_choose_us.xml",
        "views/faq.xml",
        "views/testimonial.xml",
        "views/get_in_touch.xml",
        "views/sub_banner.xml",
        "views/sub_moving_text.xml",
        "views/studiova_sub_content.xml",
        "views/meet_our_team.xml",
        "views/studiova_snippets.xml",

    ],



    'assets': {
        'web.assets_frontend': [
            # CSS Files
            'theme_studiovaxx/static/src/css/header.css',
            'theme_studiovaxx/static/src/css/studiova_footer.css',
            'theme_studiovaxx/static/src/css/studiova_banner.css',
            'theme_studiovaxx/static/src/css/stats_and_facts.css',
            'theme_studiovaxx/static/src/css/services.css',
            'theme_studiovaxx/static/src/css/featured_projects.css',
            'theme_studiovaxx/static/src/css/why_choose_us.css',
            'theme_studiovaxx/static/src/css/testimonial.css',
            'theme_studiovaxx/static/src/css/pricing.css',
            'theme_studiovaxx/static/src/css/faq.css',
            'theme_studiovaxx/static/src/css/get_in_touch.css',
            'theme_studiovaxx/static/src/css/sub_banner.css',
            'theme_studiovaxx/static/src/css/sub_moving_text.css',
            'theme_studiovaxx/static/src/css/studiova_sub_content.css',
            'theme_studiovaxx/static/src/css/meet_our_team.css',

            # JavaScript Files
            'theme_studiovaxx/static/src/js/header.js',
            'theme_studiovaxx/static/src/js/studiova_banner.js',
            'theme_studiovaxx/static/src/js/stats_and_facts.js',
            'theme_studiovaxx/static/src/js/featured_projects.js',
            'theme_studiovaxx/static/src/js/why_choose_us.js',
            'theme_studiovaxx/static/src/js/testimonial.js',
            'theme_studiovaxx/static/src/js/pricing.js',
            'theme_studiovaxx/static/src/js/faq.js',
            'theme_studiovaxx/static/src/js/get_in_touch.js',
            'theme_studiovaxx/static/src/js/sub_moving_text.js',
            'theme_studiovax/static/src/js/sub_banner.js',
            'theme_studiovax/static/src/js/meet_our_team.js',
        ],
    },

'images': [
        'static/description/studiovax_cover.gif',
        'static/description/studiovax_screenshot.gif',

    ],

    
    'live_test_url': 'http://13.60.52.65:8069',
    'installable': True,
    'auto_install': False,
    'application': False,

    'odoo_online': False,
}
