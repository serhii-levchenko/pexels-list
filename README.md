
# Tech task description

## Make an image feed using Pexels API
https://www.pexels.com/api/documentation/#photos-curated

## Requirements:

- Cell must contain: author's name, shadow and corner radius
- Pagination
- On cell selection show detail page with full image

## Optional:

- Add cache
- Pull to refresh

---

## Test task dev notes

- caching and pagination are done using "react-query"
- "flash-list" and "expo-image" are used for better UX (the content is appearing faster than using default RN components)
- "pull-to-refresh" is based on "react-query" refetch
- "pexels" library is used for defined types
- image details view is implemented on RN modal

 
 ## DEMO
https://github.com/serhii-levchenko/pexels-list/assets/3995325/8e305253-4c99-4045-9ecb-44cf1baee9f7


P.S. now you can remove instagram 😎
