// Kun dokumentti on ladattu ja valmis
$(document).ready(function () {
    let selectedArea = null;

    // Valitse testialue, kun sitä klikataan
    $('.test-area').on('click', function () {
        // Poista 'selected' luokka aiemmin valitulta alueelta, jos se on olemassa
        if (selectedArea) {
            selectedArea.removeClass('selected');
        }
        // Merkitse klikattu alue valituksi
        selectedArea = $(this);
        selectedArea.addClass('selected');
    });

    // Sovella väriä valittuun testialueeseen, kun väri klikataan
    $('.color').on('click', function () {
        if (selectedArea) {
            const color = $(this).data('color'); // Hae väri data-attribuutista
            selectedArea.css('background-color', color); // Aseta taustaväri
            // Poista valinta ja nollaa valittu alue
            selectedArea.removeClass('selected');
            selectedArea = null;
        }
    });

    // Nollaa värit napin klikkauksella
    $('#reset-button').on('click', function () {
        $('.test-area').css('background-color', '').removeClass('selected'); // Tyhjennä taustavärit ja poista valinta
        selectedArea = null;
    });
});

// Karuselli arvosteluille
$(document).ready(function () {
    let currentIndex = 0;
    const reviewItems = $('.review-item');
    const totalReviews = reviewItems.length;

    // Näytä arvostelu tietyllä indeksillä
    function showReview(index) {
        reviewItems.removeClass('active'); // Poista 'active' kaikilta arvosteluilla
        reviewItems.eq(index).addClass('active'); // Lisää 'active' vain nykyiselle arvostelulle
    }

    // Näytä seuraava arvostelu
    $('#next-btn').on('click', function () {
        currentIndex = (currentIndex + 1) % totalReviews; // Siirry seuraavaan arvosteluun
        showReview(currentIndex);
    });

    // Näytä edellinen arvostelu
    $('#prev-btn').on('click', function () {
        currentIndex = (currentIndex - 1 + totalReviews) % totalReviews; // Siirry edelliseen arvosteluun
        showReview(currentIndex);
    });
});
