# Tutor AI - Intelligent Study Assistant

An AI-powered study assistant that helps students learn by generating notes, quizzes, flashcards, and providing interactive Q&A support in both English and Hindi.

## Features

- **File Upload**: Upload study materials (.txt, .pdf with OCR support)
- **Handwritten Content**: Recognizes handwritten notes in PDFs using OCR
- **Smart Notes Generation**: AI-generated comprehensive study notes
- **Quiz Generation**: 
  - Multiple Choice Questions (MCQ) - 5-7 challenging questions
  - Written Questions - 5 essay-style questions with difficulty levels
- **Interactive Flashcards**: 8 flip cards with navigation
- **AI Chat Assistant**: Ask questions about your study material anytime
- **Bilingual Support**: Full support for English and Hindi (complete UI translation)
- **OCR Technology**: Tesseract.js for handwriting recognition
- **PDF Processing**: PDF.js for document handling

## Setup Instructions

### Option 1: Use with AI API (Recommended)

1. Get an API key from one of these providers:
   - [OpenAI](https://platform.openai.com/api-keys) (GPT-3.5/GPT-4)
   - [Google AI Studio](https://makersuite.google.com/app/apikey) (Gemini)
   - [Anthropic](https://console.anthropic.com/) (Claude)

2. Open `message.html` and update the API configuration:
   ```javascript
   const API_KEY = 'your-api-key-here';
   const API_ENDPOINT = 'https://api.openai.com/v1/chat/completions';
   ```

3. For different AI providers, update the API endpoint:
   - **OpenAI**: `https://api.openai.com/v1/chat/completions`
   - **Gemini**: `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent`
   - **Claude**: `https://api.anthropic.com/v1/messages`

### Option 2: Use Local Fallback (No API Required)

The app includes basic local processing that works without an API:
- Extracts key points from text
- Generates simple MCQs
- Creates flashcards from content

Just open `message.html` in your browser and start using it!

## Usage

1. **Open the App**: Open `message.html` in any modern web browser
2. **Upload Material**: 
   - Click "Load File" and select your study material
   - Supports .txt files (instant) and .pdf files (with OCR)
   - For handwritten PDFs, wait for OCR processing (1-3 minutes)
3. **Choose Language**: Select English or Hindi (entire UI switches)
4. **Generate Content**:
   - Click "Generate Notes" for study notes
   - Click "Generate MCQ" for 5-7 multiple choice questions
   - Click "Generate Written Question" for 5 essay-style questions
   - Click "Generate Flashcard" for 8 interactive flashcards
5. **Ask Questions**: Use the chat box to ask questions about your material

## File Format Support

### Currently Supported:
- **.txt files**: Plain text files (instant loading)
- **.pdf files**: 
  - Digital PDFs with selectable text (fast)
  - Scanned PDFs (OCR processing)
  - **Handwritten notes** (OCR with Tesseract.js)
  - Mixed content (typed + handwritten)

### OCR Features:
- Recognizes English and Hindi handwriting
- Progress bar shows processing status
- Works entirely in your browser (privacy-friendly)
- See `PDF-OCR-GUIDE.md` for detailed instructions

## Documentation

- **README.md** - This file (overview and setup)
- **QUICKSTART.md** - Get started in 3 steps
- **AI-SETUP-GUIDE.md** - Detailed AI API configuration
- **PDF-OCR-GUIDE.md** - Complete guide for PDF and handwritten content
- **IMPROVEMENTS.md** - List of advanced features

### Styling
Edit the `<style>` section to customize colors, fonts, and layout.

### AI Prompts
Modify the prompts in each function to adjust how the AI generates content:
- `generateNotes()` - Customize note-taking style
- `generateMCQ()` - Adjust question difficulty
- `generateFlashcard()` - Change flashcard format

### Language Support
Add more languages by extending the `currentLanguage` variable and translation logic.

## Browser Compatibility

Works on all modern browsers:
- Chrome/Edge (recommended)
- Firefox
- Safari
- Opera

## Privacy & Security

- All file processing happens in your browser
- Files are not uploaded to any server (except AI API calls)
- API keys should be kept secure
- For production use, implement backend API proxy to hide keys

## Future Enhancements

- [ ] PDF file support with text extraction
- [ ] Image/diagram analysis
- [ ] Progress tracking and analytics
- [ ] Export notes as PDF/Word
- [ ] Spaced repetition for flashcards
- [ ] Voice input/output
- [ ] More language support
- [ ] Collaborative study sessions

## License

Free to use and modify for educational purposes.

## Support

For issues or questions, please check the code comments or modify as needed for your use case.
