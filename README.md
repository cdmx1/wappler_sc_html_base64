Created and maintained by: Roney Dsilva

# HTML to Base64 Converter

![File Management](https://img.shields.io/badge/Group-File%20Management-blue)
![File Icon](https://img.shields.io/badge/Icon-fas%20fa%2Dlg%20fa%2Dfile%20comp%2Dfiles-blue)

## Description

The HTML to Base64 Converter is a tool that allows you to convert HTML content to Base64 encoding. This can be useful for various applications, such as embedding HTML content in data URIs or working with HTML content in a binary format.

## Table of Contents

- [Requirements](#requirements)
- [Usage](#usage)
- [Configuration](#configuration)
- [Output](#output)
- [Page Margins](#page-margins)
- [Header](#header)
- [Footer](#footer)

## Requirements

This tool uses Puppeteer for HTML to Base64 conversion. Make sure you have Puppeteer installed with version `^19.11.1`.

## Usage

To use this converter, follow these steps:

1. Provide a name for the conversion in the `Name` field.
2. Choose the `Orientation` (Portrait or Landscape).
3. Select the `Paper Size` from the available options or specify custom dimensions.
4. If you choose custom dimensions, enter the `Page Height` and `Page Width` in millimeters.
5. Choose the `Data Source` (URL or HTML).
6. If you choose HTML as the data source, enter the HTML content in the `HTML` field.
7. If you choose URL as the data source, enter the URL in the `URL` field.
8. Configure optional settings such as page margins, headers, and footers.
9. Click the `Convert` button to generate the Base64 encoding.

## Configuration

### Page

- **Name**: Provide a name for the conversion.
- **Orientation**: Choose the orientation (Portrait or Landscape).
- **Paper Size**: Select the paper size or specify custom dimensions.
- **Page Height**: Enter the page height in millimeters (required for custom size).
- **Page Width**: Enter the page width in millimeters (required for custom size).
- **Data Source**: Choose the data source (URL or HTML).
- **HTML**: Enter the HTML content (required if data source is HTML).
- **URL**: Enter the URL (required if data source is URL).

### Output

- **Output**: Enable this option to output the converted Base64 encoding.

### Page Margins (in mm)

- **Left**: Specify the left margin in millimeters.
- **Top**: Specify the top margin in millimeters.
- **Right**: Specify the right margin in millimeters.
- **Bottom**: Specify the bottom margin in millimeters.

### Header

- **HTML**: Enter the HTML content for the header.
- **Margin**: Specify the header's margin from the top in millimeters.

### Footer

- **HTML**: Enter the HTML content for the footer.
- **Margin**: Specify the footer's margin from the bottom in millimeters.

## Output

The converter will generate the Base64 encoding of the HTML content according to the specified configuration.

## License

This tool is licensed under the [MIT License](LICENSE).
