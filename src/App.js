import './App.css';

function App() {
  return (
    <div className="container">
      <nav className='global-nav'>
        <div className="global-nav-links">
          <a href="#" className="global-nav-item">Rooms</a>
          <a href="#" className="global-nav-item">Ideas</a>
          <a href="#" className="global-nav-item">Stores</a>
          <a href="#" className="global-nav-item">Contact</a>
        </div>
      </nav>
      <nav className="local-nav">
        <div className="local-nav-links">
          <a href="#" className="product-name">Airmug Pro</a>
          <a href="#">개요</a>
          <a href="#">제품사양</a>
          <a href="#">구입하기</a>
        </div>
      </nav>
      <section className="scroll-section" id="scroll-section-0">
        <h1>AirMug Pro</h1>
        <div className="sticky-elem main-message">
          <p>온전히 빠져들게 하는 <br />최고급 세라믹</p>
        </div>
        <div className="sticky-elem main-message">
          <p>주변 맛을 느끼게 해주는 <br />주변 맛 허용 모드</p>
        </div>
        <div className="sticky-elem main-message">
          <p>온종일 편안한 <br />맞춤형 손잡이</p>
        </div>
        <div className="sticky-elem main-message">
          <p>새롭게 입가를 <br />찾아온 매혹</p>
        </div>
      </section>

      <section className="scroll-section" id="scroll-section-1">
        <p>
          <strong>보통 스크롤 영역</strong>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt, excepturi. Maiores voluptate, facilis fuga corporis deleniti molestiae magnam quisquam laboriosam nesciunt eos suscipit mollitia rerum fugit, doloremque quae! Delectus expedita repudiandae impedit porro cum. Dolorum harum delectus corporis inventore vel, pariatur iste accusantium est! Laborum nihil iure quibusdam quisquam ipsam harum molestiae in numquam exercitationem deleniti animi quam quod sunt laudantium, qui fugit, aspernatur iusto voluptatibus hic laboriosam? Nemo magni laudantium veritatis esse illum molestias. Molestiae eveniet perspiciatis nostrum repellat iste ex iure hic, magnam nulla numquam consectetur cumque voluptate, excepturi illum debitis explicabo dolor placeat, voluptatum aliquam eius quis sunt architecto aspernatur quod. Nihil provident saepe earum quasi non dolore, tempore, dolores assumenda vitae recusandae culpa voluptas accusamus soluta repudiandae blanditiis reprehenderit distinctio perferendis quidem nisi alias sunt! Maxime saepe nulla ea hic delectus in esse expedita autem. Modi animi doloribus vel alias numquam minima accusamus quibusdam. Eum, sapiente impedit? Expedita perspiciatis amet porro quo atque autem iste voluptatibus nemo eveniet exercitationem. Iure ea, eligendi sint repellendus aliquam voluptatum repellat cupiditate fugiat alias vel error modi omnis quod nobis quos! Vitae voluptatem illum consequatur aspernatur nihil odit, eum repudiandae eveniet accusamus iusto nam laborum repellendus, sed unde in amet!
        </p>
      </section>

      <section className="scroll-section" id="scroll-section-2">
        <div className="sticky-elem main-message">
          <p>
            <small>편안한 촉감</small>
            입과 하나 되다
          </p>
        </div>
        <div className="sticky-elem desc-message">
          <p>
            편안한 목넘김을 완성하는 디테일한 여러 구성 요소들, 우리는 이를 하나하나 새롭게 살피고 재구성하는 과정을 거쳐 새로운 수준의 머그, AirMug Pro를 만들었습니다. 입에 뭔가 댔다는 감각은 어느새 사라지고 오롯이 당신과 음료만 남게 되죠.
          </p>
          <div className="pin"></div>
        </div>
        <div className="sticky-elem desc-message">
          <p>
            디자인 앤 퀄리티 오브 스웨덴, <br />메이드 인 차이나
          </p>
          <div className="pin"></div>
        </div>
      </section>

      <section className="scroll-section" id="scroll-section-3">
        <p className="mid-message">
          <strong>Retina 머그</strong>
          아이디어를 광활하게 펼칠<br />
          아름답고 부드러운 음료 공간.
        </p>
        {/* <canvas class="image-blend-canvas" width="1920" height="1080"></canvas> */}
        <p class="canvas-caption">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet at fuga quae perspiciatis veniam impedit et, ratione est optio porro. Incidunt aperiam nemo voluptas odit quisquam harum in mollitia. Incidunt minima iusto in corporis, dolores velit. Autem, sit dolorum inventore a rerum distinctio vero illo magni possimus temporibus dolores neque adipisci, repudiandae repellat. Ducimus accusamus similique quas earum laborum. Autem tempora repellendus asperiores illum ex! Velit ea corporis odit? Ea, incidunt delectus. Sapiente rerum neque error deleniti quis, et, quibusdam, est autem voluptate rem voluptas. Ratione soluta similique harum nihil vel. Quas inventore perferendis iusto explicabo animi eos ratione obcaecati.
        </p>
      </section>
      <footer class="footer">
        2020, 1분코딩
      </footer>
    </div>
  );
}

export default App;
