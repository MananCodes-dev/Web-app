# 🎓 Tutor AI - Complete Master Guide

## 📋 Table of Contents
1. [Overview](#overview)
2. [Quick Start](#quick-start)
3. [Features](#features)
4. [Setup Instructions](#setup-instructions)
5. [User Guide](#user-guide)
6. [Technical Details](#technical-details)
7. [Troubleshooting](#troubleshooting)

---

## 🌟 Overview

**Tutor AI** is a complete student learning platform with three powerful tools:

### 🏠 Home Page (`index.html`)
- Feature showcase and introduction
- Navigation to all tools

### 📚 Student Learning Hub (`student.html`)
- Upload study materials (TXT, PDF, handwritten notes)
- Generate AI-powered notes, quizzes, and flashcards
- Interactive mind maps with visual diagrams
- Multi-language support (English, Hindi, Hinglish)
- Text-to-speech with Leo TTS
- AI chat assistant

### 🤖 AI Converter (`ai-converter.html`)
- Convert AI-generated text to human-like writing
- 5 tone options: Professional, Casual, Academic, Creative, Friendly
- Character counter and copy/download features

---

## 🚀 Quick Start

### 1. Open the Website
```bash
# Open in browser
start index.html
```

### 2. Navigate to Student Hub
- Click "Student" in navigation bar
- Or open `student.html` directly

### 3. Upload Study Material
- Click "Choose File" button
- Select `.txt` or `.pdf` file
- Click "Load File"
- Wait for processing (OCR for handwritten PDFs)

### 4. Choose Language
- Click language button: English | हिंदी | Hinglish

### 5. Generate Content
- **Notes**: Click "Generate Notes" → AI creates study notes
- **MCQ**: Click "Generate MCQ" → Multiple choice questions
- **Written**: Click "Generate Written Question" → Essay questions
- **Flashcards**: Click "Generate Flashcard" → Study cards (click to flip)
- **Mind Map**: Click "Generate Mind Map" → Visual concept diagram

### 6. Use Features
- **Read Aloud**: Click speaker icon to hear notes (Leo TTS)
- **Copy**: Copy content to clipboard
- **Download**: Save as text file
- **Chat**: Ask questions about your material

---

## ✨ Features

### 📝 Content Generation
- **AI-Powered Notes**: Summarized, organized study notes
- **MCQ Questions**: Multiple choice with 4 options
- **Written Questions**: Essay-style questions
- **Flashcards**: Interactive flip cards (Q&A)
- **Mind Maps**: Visual concept diagrams with 3-level hierarchy

### 🗣️ Text-to-Speech (Leo TTS)
- **Premium Voice**: Leo from Turbo AI
- **All Languages**: English, Hindi, Hinglish
- **Symbol Filtering**: Removes decorative symbols before reading
- **Auto Fallback**: Uses browser TTS if Leo unavailable
- **Controls**: Play/Pause with button

### 🌍 Multi-Language Support
- **English**: Full AI support
- **Hindi (हिंदी)**: Native Hindi content
- **Hinglish**: Hindi in Roman script (Aap kaise ho?)

### 📄 File Support
- **Text Files (.txt)**: Direct text extraction
- **PDF Files (.pdf)**: Text extraction + OCR
- **Handwritten Notes**: OCR with Tesseract.js
- **Progress Tracking**: Real-time loading status

### 🧠 Mind Map Features
- **3-Level Hierarchy**: Center → Primary → Sub-branches
- **Smart Layout**: No overlapping nodes
- **Frequency Indicators**: Shows concept importance
- **Interactive Controls**: Pan, zoom in/out, reset
- **Download**: Save as PNG image
- **Touch Support**: Works on mobile devices

### 💬 AI Chat Assistant
- **Context-Aware**: Knows your uploaded material
- **Multi-Language**: Responds in selected language
- **Chat History**: Scrollable conversation
- **Real-Time**: Instant responses

### 🎨 Gold & Black Theme
- **Stylish Design**: Premium gold and black colors
- **High Contrast**: White content areas with black text (21:1 ratio)
- **Readable**: WCAG AAA compliant
- **Consistent**: Theme across all pages
- **Responsive**: Works on all devices

---

## 🔧 Setup Instructions

### Prerequisites
```
- Modern web browser (Chrome, Firefox, Edge, Safari)
- Internet connection (for AI API and libraries)
- API keys (for full functionality)
```

### API Configuration

#### 1. AI API (OpenAI/Gemini)
Edit `student.html` line ~800:
```javascript
const API_KEY = 'YOUR_API_KEY_HERE';
const API_ENDPOINT = 'https://api.openai.com/v1/chat/completions';
```

#### 2. Leo TTS API (Turbo AI)
Edit `student.html` line ~805:
```javascript
const LEO_TTS_API_KEY = 'YOUR_LEO_API_KEY_HERE';
const LEO_TTS_ENDPOINT = 'https://api.turbo.ai/v1/tts';
```

### File Structure
```
tutor-ai/
├── index.html              # Home page
├── student.html            # Student learning hub
├── ai-converter.html       # AI text converter
├── theme-gold-black.css    # Theme stylesheet
├── sample-study-material.txt
└── Documentation/
    ├── MASTER-GUIDE.md     # This file
    ├── QUICKSTART.md
    ├── AI-SETUP-GUIDE.md
    └── [other docs]
```

---

## 📖 User Guide

### Uploading Files

#### Text Files (.txt)
1. Click "Choose File"
2. Select `.txt` file
3. Click "Load File"
4. ✓ Instant loading

#### PDF Files (.pdf)
1. Click "Choose File"
2. Select `.pdf` file
3. Click "Load File"
4. Wait for processing:
   - Text extraction (fast)
   - OCR for handwritten content (slower)
   - Progress bar shows status
5. ✓ Text extracted and corrected

#### Viewing Extracted Text
- After loading, click "View Extracted Text" button
- Edit text if needed
- Click "Save Edits" to update

### Generating Content

#### Notes
1. Upload file and select language
2. Click "Generate Notes"
3. Wait for AI processing
4. Notes appear in white box
5. Use buttons:
   - **Read Aloud**: Hear notes with Leo TTS
   - **Copy**: Copy to clipboard
   - **Download**: Save as `notes.txt`

#### MCQ Questions
1. Click "Generate MCQ"
2. AI creates multiple choice question
3. 4 options provided
4. Generate multiple times for different questions

#### Written Questions
1. Click "Generate Written Question"
2. AI creates essay-style question
3. Suitable for detailed answers

#### Flashcards
1. Click "Generate Flashcard"
2. Card appears with question
3. **Click card to flip** and see answer
4. Generate more for additional cards

#### Mind Maps
1. Click "Generate Mind Map"
2. AI extracts key concepts
3. Visual diagram appears:
   - **Center node**: Main topic (gold star)
   - **Primary nodes**: 6 key concepts
   - **Sub-nodes**: Related topics
   - **Frequency badges**: Concept importance
4. Controls:
   - **Drag**: Pan around canvas
   - **Zoom In/Out**: Adjust view
   - **Reset**: Return to default view
   - **Download**: Save as PNG

### Using Text-to-Speech

#### Leo TTS (Premium)
1. Generate notes
2. Click "Read Aloud" button (speaker icon)
3. Leo voice reads content
4. Click again to stop
5. Works in all languages

#### Features
- **Symbol Filtering**: Removes ✨📚🎯 etc.
- **Natural Voice**: Premium Leo quality
- **Auto Language**: Detects English/Hindi/Hinglish
- **Fallback**: Browser TTS if Leo unavailable

### Chat Assistant

#### Asking Questions
1. Type question in chat input box
2. Click "Send" or press Enter
3. AI responds based on your material
4. Conversation history saved

#### Tips
- Ask specific questions about uploaded content
- Request explanations or examples
- Get help with difficult concepts
- Works in selected language

### AI Text Converter

#### Converting Text
1. Navigate to "AI Converter" page
2. Paste AI-generated text
3. Select tone:
   - **Professional**: Business writing
   - **Casual**: Friendly, relaxed
   - **Academic**: Scholarly, formal
   - **Creative**: Artistic, expressive
   - **Friendly**: Warm, approachable
4. Click "Convert to Human Text"
5. Humanized text appears
6. Use buttons:
   - **Copy**: Copy to clipboard
   - **Clear**: Reset fields
   - **Download**: Save as text file

---

## 🔬 Technical Details

### Technologies Used

#### Frontend
- **HTML5**: Structure
- **CSS3**: Styling with gradients, animations
- **JavaScript (ES6+)**: Functionality

#### Libraries
- **PDF.js**: PDF text extraction
- **Tesseract.js**: OCR for handwritten notes
- **Font Awesome**: Icons
- **Leo TTS API**: Premium text-to-speech

#### AI Integration
- **OpenAI API**: GPT models for content generation
- **Gemini API**: Alternative AI provider
- **Custom prompts**: Optimized for educational content

### Mind Map Algorithm

#### Concept Extraction
```javascript
1. Split text into sentences
2. Extract nouns and key phrases
3. Count frequency of concepts
4. Select top 6 primary concepts
5. Find related sub-concepts (up to 12)
6. Build 3-level hierarchy
```

#### Layout Algorithm
```javascript
1. Center node at canvas center
2. Primary nodes in circle (280px radius)
3. Sub-nodes branching out (140px distance)
4. Angle distribution: 360° / node count
5. Smart text positioning (above/below)
6. Frequency indicators placed outward
```

#### Spacing Parameters
- **Canvas**: 1200x800px
- **Center node**: 80px diameter
- **Primary nodes**: 65px diameter
- **Sub-nodes**: 40px diameter
- **Branch distance**: 280px
- **Sub-branch distance**: 140px
- **Text width**: 1.7x node radius

### Text-to-Speech Implementation

#### Leo TTS Flow
```javascript
1. Filter symbols from text
2. Detect language (en-US, hi-IN)
3. Call Leo TTS API
4. Receive audio stream
5. Play audio
6. Fallback to browser TTS if error
```

#### Language Detection
- **English**: Latin characters, English words
- **Hindi**: Devanagari script (अ-ह)
- **Hinglish**: Latin characters + Hindi words

### Theme System

#### Color Palette
```css
--primary-gold: #d4af37
--light-gold: #f0e68c
--dark-gold: #b8941e
--black: #000000
--dark-gray: #1a1a1a
```

#### Readability
- **Content areas**: White (#ffffff) background
- **Text**: Black (#000000) color
- **Contrast**: 21:1 ratio (WCAG AAA)
- **Font size**: 1.05rem
- **Line height**: 1.8

---

## 🐛 Troubleshooting

### File Upload Issues

#### "Could not extract text from PDF"
- **Cause**: PDF is image-based or corrupted
- **Solution**: 
  - Ensure PDF contains readable text
  - Try OCR processing (automatic for handwritten)
  - Convert PDF to text manually if needed

#### "File loading failed"
- **Cause**: File format not supported
- **Solution**: Use only `.txt` or `.pdf` files

#### OCR taking too long
- **Cause**: Large PDF with many pages
- **Solution**: 
  - Wait for progress bar to complete
  - Use smaller PDFs (under 20 pages)
  - Extract text manually for very large files

### Content Generation Issues

#### "API key not configured"
- **Cause**: Missing or invalid API key
- **Solution**: 
  - Add your API key in `student.html`
  - Check API key is valid
  - Ensure internet connection

#### Content not generating
- **Cause**: API error or no uploaded text
- **Solution**:
  - Upload file first
  - Check browser console for errors
  - Verify API endpoint is correct

#### Wrong language output
- **Cause**: Language not selected
- **Solution**: Click language button before generating

### Text-to-Speech Issues

#### Leo TTS not working
- **Cause**: Missing API key or network error
- **Solution**:
  - Add Leo API key in `student.html`
  - Check internet connection
  - Browser TTS will work as fallback

#### Voice reading symbols
- **Cause**: Symbol filter not working
- **Solution**: Already fixed - symbols removed automatically

#### No sound
- **Cause**: Browser permissions or muted
- **Solution**:
  - Check browser sound permissions
  - Unmute browser/system
  - Try browser TTS (fallback)

### Mind Map Issues

#### Nodes overlapping
- **Cause**: Too many concepts
- **Solution**: Already fixed with optimized spacing

#### Text truncated with "..."
- **Cause**: Long concept names
- **Solution**: Already fixed with smart text breaking

#### Can't see full map
- **Cause**: Zoom level
- **Solution**: Use "Reset" button or zoom out

#### Download not working
- **Cause**: Browser permissions
- **Solution**: Allow downloads in browser settings

### Display Issues

#### Text hard to read
- **Cause**: Theme colors
- **Solution**: Already fixed - white background with black text

#### Layout broken on mobile
- **Cause**: Screen size
- **Solution**: Responsive design implemented - should work

#### Scrollbars not visible
- **Cause**: Browser styling
- **Solution**: Gold scrollbars implemented

---

## 📊 Feature Comparison

| Feature | Student Hub | AI Converter | Home Page |
|---------|-------------|--------------|-----------|
| File Upload | ✅ | ❌ | ❌ |
| AI Notes | ✅ | ❌ | ❌ |
| MCQ Quiz | ✅ | ❌ | ❌ |
| Flashcards | ✅ | ❌ | ❌ |
| Mind Maps | ✅ | ❌ | ❌ |
| Text-to-Speech | ✅ | ❌ | ❌ |
| Multi-Language | ✅ | ❌ | ❌ |
| AI Chat | ✅ | ❌ | ❌ |
| Text Conversion | ❌ | ✅ | ❌ |
| Navigation | ✅ | ✅ | ✅ |

---

## 🎯 Best Practices

### For Students

#### Uploading Materials
- Use clear, readable PDFs
- Keep files under 10MB for faster processing
- One topic per file for focused content

#### Generating Content
- Select language before generating
- Generate multiple times for variety
- Review and edit AI output as needed

#### Studying
- Use flashcards for memorization
- Mind maps for concept overview
- Notes for detailed understanding
- MCQ for self-testing

### For Developers

#### API Keys
- Never commit API keys to version control
- Use environment variables in production
- Implement rate limiting

#### Performance
- Lazy load libraries
- Cache AI responses
- Optimize images and assets

#### Accessibility
- Maintain high contrast (21:1)
- Provide keyboard navigation
- Add ARIA labels

---

## 📈 Version History

### v1.0 - Initial Release
- Basic file upload
- AI content generation
- English only

### v2.0 - Multi-Language
- Hindi support
- Hinglish support
- Language toggle

### v3.0 - Text-to-Speech
- Leo TTS integration
- All languages supported
- Symbol filtering

### v4.0 - Multi-Page
- Home page added
- AI Converter added
- Navigation system

### v5.0 - Gold Theme
- Gold and black design
- Consistent styling
- Responsive layout

### v6.0 - Mind Maps
- Visual diagrams
- Interactive controls
- 3-level hierarchy

### v7.0 - Improvements
- Enhanced spacing
- Smart text breaking
- Better readability

### v8.0 - Readability Fix (Current)
- White content backgrounds
- Black text (21:1 contrast)
- Gold scrollbars
- Perfect accessibility

---

## 🤝 Support

### Getting Help
- Check this guide first
- Review troubleshooting section
- Check browser console for errors

### Common Questions

**Q: Do I need internet?**
A: Yes, for AI features and libraries.

**Q: Which browsers work?**
A: Chrome, Firefox, Edge, Safari (latest versions).

**Q: Is my data saved?**
A: No, everything is client-side. Refresh = data lost.

**Q: Can I use offline?**
A: No, requires internet for AI and libraries.

**Q: How do I get API keys?**
A: Sign up at OpenAI.com and Turbo.ai.

---

## 🎓 Tips & Tricks

### Study Tips
1. Upload chapter summaries for quick notes
2. Generate multiple MCQs for practice
3. Use mind maps before exams for overview
4. Listen to notes while commuting (TTS)
5. Chat with AI to clarify doubts

### Power User Features
- **Keyboard**: Enter to send chat messages
- **Editing**: View and edit extracted text
- **Downloading**: Save all generated content
- **Multiple Languages**: Switch anytime
- **Flashcard Flipping**: Click anywhere on card

### Optimization
- Use smaller files for faster processing
- Generate content in batches
- Download important content
- Use mind maps for complex topics

---

## 📝 Credits

### Technologies
- PDF.js by Mozilla
- Tesseract.js by Naptha
- Font Awesome by Fonticons
- Leo TTS by Turbo AI

### AI Models
- OpenAI GPT
- Google Gemini

---

## 📄 License

This project is for educational purposes.

---

## 🚀 Future Enhancements

### Planned Features
- [ ] Save/Load sessions
- [ ] Export to PDF
- [ ] More languages
- [ ] Collaborative study
- [ ] Progress tracking
- [ ] Spaced repetition
- [ ] Video support
- [ ] Image annotations

---

**Last Updated**: February 10, 2026
**Version**: 8.0
**Status**: Production Ready ✅

---

Made with ❤️ for students worldwide
