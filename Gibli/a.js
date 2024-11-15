  // Poster data array
  let posters = [
    { title: 'Poster 1 Title', mainPosterSrc: '3.webp', characterImageSrc: '2.jpg', characterIntroText: 'This is the story of character 1, filled with courage and kindness.', description: 'A tale of adventure and heartwarming friendship unfolds with character 1 as they brave unknown lands.', link: 'https://example.com/poster1' },
    { title: 'Poster 2 Title', mainPosterSrc: '4.jpeg', characterImageSrc: '6.jpg', characterIntroText: 'Character 2 embarks on a mystical journey that changes everything.', description: 'Follow character 2 as they embark on a journey filled with wonder and discovery.', link: 'https://example.com/poster2' },
    { title: 'Poster 3 Title', mainPosterSrc: '5.jpg', characterImageSrc: '9.jpg', characterIntroText: 'In a world of dreams, character 3 discovers a hidden truth.', description: 'Character 3 uncovers hidden secrets that lead them to a deeper understanding of their world.', link: 'https://example.com/poster3' },
    { title: 'Poster 4 Title', mainPosterSrc: '7.jpg', characterImageSrc: '10.webp', characterIntroText: 'With unwavering bravery, character 4 faces incredible odds.', description: 'Bravery and determination drive character 4 as they face the challenges that lie ahead.', link: 'https://example.com/poster4' }
  ];

  // Function to change the main poster and update the poster grid order
  function changeMainPoster(index) {
    // Get current main poster data
    const mainPosterData = {
      title: document.getElementById('main-title').textContent,
      mainPosterSrc: document.getElementById('main-poster').src,
      characterImageSrc: document.getElementById('character-image').src,
      characterIntroText: document.getElementById('character-intro').textContent,
      description: document.getElementById('main-description').textContent,
      link: document.getElementById('poster-link').href //링크 저장
    };

    // Update the main poster with the selected poster's data
    document.getElementById('main-title').textContent = posters[index].title;
    document.getElementById('main-poster').src = posters[index].mainPosterSrc;
    document.getElementById('character-image').src = posters[index].characterImageSrc;
    document.getElementById('character-intro').textContent = posters[index].characterIntroText;
    document.getElementById('main-description').textContent = posters[index].description;
    // 포스터 정보 업데이트 시 링크도 변경
    document.getElementById('poster-link').href = posters[index].link;

    // Update the posters array by removing the selected poster and appending the old main poster to the end
    posters.push(mainPosterData); // Add the old main poster to the end
    posters.splice(index, 1); // Remove the selected poster from its original position

    // Update poster grid images
    const posterGrid = document.getElementById('poster-grid').children;
    for (let i = 0; i < posters.length; i++) {
      posterGrid[i].src = posters[i].mainPosterSrc;
    }
  }