# Kotkantien Maalaus ja Tapetointi by Elmeri Kuvaja
Tavoitteenani oli tehdä tälle yritykselle nettisivu ja mielestäni onnistuin

## Kuvia nettisivusta
Tässä on Etusivu

![etusivukotka](https://github.com/user-attachments/assets/b2fb20b5-7c64-4080-bf81-5ce544c56710)

Tässä on Palvelut sivu

![image](https://github.com/user-attachments/assets/6ae84727-3fab-443c-90a5-31380d83a5d3)

Tässä on Galleria sivu

![image](https://github.com/user-attachments/assets/acddba20-059c-4b67-a7a8-73487b8d71ff)

Tässä on Värien testaus sivu

![image](https://github.com/user-attachments/assets/94354311-f900-4aef-9a58-f44f536f7a93)

Tässä on Ota yhteyttä sivu

![image](https://github.com/user-attachments/assets/501ecc69-d131-4b53-93c0-9c002018e26b)

## Kuvia koodista

Tässä koodissa näytetään arvostelu karuselli etusivulta.
``` HTML
<div class="review-carousel">
    <!-- Yksi arvostelunäyttö kerrallaan, muut ovat piilossa -->
    <div class="review-item active">
        <p>★★★★★</p>
        <p><strong>Erinomainen kokemus!</strong></p>
        <p>"Palvelu oli loistavaa ja moitteetonta. Suosittelen ehdottomasti kaikille!" - Pekka Pouta.</p>
    </div>
    <div class="review-item">
        <p>★★★★★</p>
        <p><strong>Aivan huippu!</strong></p>
        <p>"Työntekijät olivat todella ystävällisiä ja hauskoja. Työt tehtiin huolellisesti ja tulos oli mahtava!" - Iines Ankka.</p>
    </div>
    <div class="review-item">
        <p>★★★★★</p>
        <p><strong>Yksinkertaisesti paras!</strong></p>
        <p>"Kaikki meni juuri kuten oli luvattu. Nyt aina, kun kävelen olohuoneeseeni en voi kuin ihailla" - Juha-Pekka Sillan-alla.</p>
    </div>
    <div class="review-item">
        <p>★★★★★</p>
        <p><strong>Mahtava kokemus!</strong></p>
        <p>"Yllätyin laadusta todella positiivisesti. Hinta-laatusuhde erinomainen!" - Kalle Keränen.</p>
    </div>
    <div class="review-item">
        <p>★★★★★</p>
        <p><strong>Täydellinen palvelu!</strong></p>
        <p>"Kaikki meni juuri niin kuin piti, ei mitään moitittavaa. Suosittelen lämpimästi!" - Raija Penttinen.</p>
    </div>
    <div class="review-item">
        <p>★★★★★</p>
        <p><strong>Tosi hyvä paikka!</strong></p>
        <p>"Ystävälliset työntekijät ja tuli laadukas seinä. Jos tulee taas tarvetta tilaamme täältä ihan varmasti!" - Eino Leino.</p>
    </div>

    <!-- Karusellin ohjausnapit -->
    <div class="carousel-controls">
        <button id="prev-btn">◀️ Edellinen</button>
        <button id="next-btn">Seuraava ▶️</button>
    </div>
  </div>
