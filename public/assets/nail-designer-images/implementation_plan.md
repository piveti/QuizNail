# Implementation Plan: Asset Integration and Video Fallback

## Objective
Integrate real images mapped in `index.json` into the application, implement an `Image` component for robust lazy loading and fallbacks, and fix the primary video player to fallback to Panda Video if the local video fails.

## Tasks

### 1. Robust Image Component (`src/components/Image.tsx`)
Create a new reusable `Image` component that:
- Uses `loading="lazy"` by default.
- Handles `onError` to display a fallback visual (e.g., a gray box or a default placeholder) to prevent broken layouts.

### 2. Update Data Mapping (`src/data/page.ts`)
Replace the current external/placeholder URLs with local paths mapped from `/public/assets/nail-designer-images/index.json`.
- `hero.bgImage`: `.../Copia-de-Copia-de-Copia-de-Design-sem-nome.jpg` (I will find the closest match in `outros` or `modulos` or use a generic one if missing, wait I need to check the exact mapping).
- `testimonials.placeholders`: Use the 6 placeholder images from `outros` (e.g., `ainda-em-duvida__*.png`).
- `techniques.images`: Map to 4 module images.
- `whatYouGet.mockupImages`: Map to relevant module or UI images.
- `raffle.image`: Map to the raffle banner in `bonus`.
- `pricing` and `guarantee`: Map to safe checkout icons in `ui` or `outros`.
- *I will create a helper or directly map the paths based on the context strings in `index.json`.*

### 3. Update Components to use `Image`
Refactor components (`Hero.tsx`, `StudyArea.tsx`, `Testimonials.tsx`, etc.) to use the new `Image` component instead of native `<img>` tags.

### 4. Fix Video Fallback (`src/components/VideoSection.tsx`)
- Currently, the local video is the primary player, but there is no fallback to Panda if it fails.
- Re-introduce the `useLocalPlayer` state (defaulting to `true`).
- If the local `<video>` fires `onError`, switch `useLocalPlayer` to `false` and render the Panda iframe.
- Add an explicit "Carregando player alternativo..." message during the transition.

## Open Questions for the User
- The JSON contains many module images. I will map them as best as possible based on the context. If any specific image is wrong, the path in `src/data/page.ts` can be easily adjusted later. Is this acceptable?
