# Sark SEO Agency Landing Page

Landing page được xây dựng lại từ thiết kế Figma cho bài test **Junior
Animated Web Developer.

## Demo / Source
-   Framework: Next.js + React + TypeScript
-   Styling: CSS Modules
-   3D: Three.js + React Three Fiber + Drei
-   Animation: GSAP + ScrollTrigger
-   Deployment : Vercel
-   Design reference: Figma Landing Page

## 3D Asset

### Asset được sử dụng

File 3D chính:

``` text
public/models/management.glb
public/models/reload_rotate_icons_refresh_loop_circular_symbol.glb
```

Nguồn asset model : https://sketchfab.com
            image : figma
            video : https://www.youtube.com/watch?v=vE_A4IhmkKQ (link nhúng)
Asset model  được chọn vì  free model  tương đương chủ đề  phù hợp với hướng visual của landing
page và có thể sử dụng tốt cho phần Hero/Feature để tạo trải nghiệm
tương tác 3D.

### Cách sử dụng

Model được load bằng `useGLTF`:

``` tsx
const { scene } = useGLTF("/models/management.glb");
const { scene } = useGLTF("/models/reload_rotate_icons_refresh_loop_circular_symbol.glb");
```

## Animation & Interaction

### Hero

3D camera được hiển thị trong Hero section.

Các thiết lập hiện tại tập trung vào:

-   React Three Fiber Canvas
-   Camera perspective
-   Lighting bằng `ambientLight` và `directionalLight`
-   Environment studio
-   Không cho phép zoom/pan để tránh thao tác không cần thiết

### Feature Section

GSAP ScrollTrigger được sử dụng để đồng bộ animation 3D với quá trình
scroll.

Mục tiêu interaction:

``` text
Scroll
  ↓
GSAP ScrollTrigger
  ↓
3D camera rotation
  ↓
Feature content thay đổi theo progress
```

## Tối ưu 3D

Các kỹ thuật tối ưu đã sử dụng / áp dụng trong project:

-   Sử dụng định dạng **GLB**, giúp đóng gói geometry/material/texture
    trong một asset thuận tiện cho web.
-   Sử dụng `useGLTF.preload()` để preload model trước khi cần render.
-   Giới hạn pixel ratio của Three.js bằng:








## Performance Target

Assignment yêu cầu:

-   Google PageSpeed Insights **Desktop \> 90**
-   Trải nghiệm 3D khoảng **50--60 FPS**

Sau khi deploy production, kiểm tra bằng:

**Google PageSpeed Insights**

``` text
<!-- //https://pagespeed.web.dev/ -->
```
Và kiểm tra FPS bằng Chrome DevTools:
``` text
F12
→ Performance
→ Record
→ Scroll qua toàn bộ landing page
→ Kiểm tra Frames
```

Performance sẽ được kiểm tra trên bản production thay vì chỉ dựa vào môi
trường development.

## Project Structure

``` text
app/
├── layout.tsx
├── page.tsx
└── globals.css

components/
├── Header.tsx
├── Header.module.css
├── hero/
│   ├── Hero.tsx
│   ├── Hero.module.css
│   ├── HeroScene.tsx
│   ├── HeroStats.tsx
│   └── HeroStats.module.css
├── logos/
│   ├── LogosSection.tsx
│   └── LogosSection.module.css
├── feature/
│   ├── FeatureSection.tsx
│   ├── FeatureSection.module.css
│   └── FeatureScene.tsx
├── content/
│   ├── ContentSection.tsx
│   └── ContentSection.module.css
├── service/
│   ├── ServiceSection.tsx
│   └── ServiceSection.module.css
├── team/
│   ├── TeamSection.tsx
│   └── TeamSection.module.css
├── faq/
│   ├── FAQSection.tsx
│   └── FAQSection.module.css
├── cta/
│   ├── CTASection.tsx
│   └── CTASection.module.css
└── footer/
    ├── Footer.tsx
    └── Footer.module.css

public/
├── image/
│   ├── airbnb.jpg
│   ├── google.jpg
│   ├── microsoft.jpg
│   ├── ola.jpg
│   ├── walmart.jpg
│   └──team-1.jpg
|   └──team-2.jpg
|   └──team-3.jpg
└── models/
    └── mangaement.glb
    └── reload_rotate_icons_refresh_loop_circular_symbol.glb
```

## Run Locally

Install dependencies:

``` bash
npm install
```

Run development server:

``` bash
npm run dev
```

Open:

``` text
http://localhost:3000
```

## Production Build

Kiểm tra production build trước khi deploy:

``` bash
npm run build
```

Sau đó:

``` bash
npm start
```

## Deployment

Project có thể deploy trên Vercel:

1.  Push source code lên GitHub.
2.  Import repository vào Vercel.
3.  Deploy project.
4.  Dùng URL production để kiểm tra PageSpeed Insights.
5.  Kiểm tra responsive và FPS trên bản production.

## Notes

Các giá trị thống kê và nội dung trong landing page được sử dụng để tái
hiện thiết kế Figma cho mục đích bài test.

Trước khi submit, cần kiểm tra lại:

-   License/attribution của asset 3D.
-   PageSpeed Desktop.
-   FPS khi scroll qua Feature Section.
-   Responsive trên mobile/tablet.
-   Production build không có lỗi.
