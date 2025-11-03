# -*- coding: utf-8 -*-
# Developed by XAPP.
{
    'name': 'Studiova',
    'category': 'Theme',
    'version': '18.0.1.0.0',
    'sequence': 1,
    'author': 'XAPP',
    'summary': 'Professional Odoo Website Theme - Perfect for Creative Agencies, Portfolios & Corporate Websites',
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
    'price': 59.00,
    'currency': 'USD',

    'depends': [
        'website',
        'web_editor',
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

    'images': [
        'static/description/studiova.gif',
    ],

    'assets': {
        'web.assets_frontend': [
            # CSS Files
            'theme_studiovax/static/src/css/header.css',
            'theme_studiovax/static/src/css/studiova_footer.css',
            'theme_studiovax/static/src/css/studiova_banner.css',
            'theme_studiovax/static/src/css/stats_and_facts.css',
            'theme_studiovax/static/src/css/services.css',
            'theme_studiovax/static/src/css/featured_projects.css',
            'theme_studiovax/static/src/css/why_choose_us.css',
            'theme_studiovax/static/src/css/testimonial.css',
            'theme_studiovax/static/src/css/pricing.css',
            'theme_studiovax/static/src/css/faq.css',
            'theme_studiovax/static/src/css/get_in_touch.css',
            'theme_studiovax/static/src/css/sub_banner.css',
            'theme_studiovax/static/src/css/sub_moving_text.css',
            'theme_studiovax/static/src/css/studiova_sub_content.css',
            'theme_studiovax/static/src/css/meet_our_team.css',

            # JavaScript Files
            'theme_studiovax/static/src/js/header.js',
            'theme_studiovax/static/src/js/studiova_banner.js',
            'theme_studiovax/static/src/js/stats_and_facts.js',
            'theme_studiovax/static/src/js/featured_projects.js',
            'theme_studiovax/static/src/js/why_choose_us.js',
            'theme_studiovax/static/src/js/testimonial.js',
            'theme_studiovax/static/src/js/pricing.js',
            'theme_studiovax/static/src/js/faq.js',
            'theme_studiovax/static/src/js/get_in_touch.js',
            'theme_studiovax/static/src/js/sub_moving_text.js',
            'theme_studiovax/static/src/js/sub_banner.js',
            'theme_studiovax/static/src/js/meet_our_team.js',
        ],
    },

    'installable': True,
    'auto_install': False,
    'application': False,
}
