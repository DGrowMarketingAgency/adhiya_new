// ================== SLIDER ==================
const slider = document.getElementById("slider");
const slides = document.querySelectorAll(".hero");

if (slider && slides.length > 0) {
  const totalSlides = slides.length;
  let index = 0;
  let interval = setInterval(autoSlide, 5000); // auto every 5s

  function autoSlide() {
    index = (index + 1) % totalSlides;
    updateSlide();
  }

  function updateSlide() {
    slider.style.transform = `translateX(-${index * 100}%)`;
  }

  const prevBtn = document.querySelector(".prev");
  const nextBtn = document.querySelector(".next");

  if (prevBtn) {
    prevBtn.addEventListener("click", () => {
      index = (index - 1 + totalSlides) % totalSlides;
      updateSlide();
      resetInterval();
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      index = (index + 1) % totalSlides;
      updateSlide();
      resetInterval();
    });
  }

  function resetInterval() {
    clearInterval(interval);
    interval = setInterval(autoSlide, 5000);
  }
}

// ================== SERVICES ==================
const serviceContent = {
  hair: {
    image: "./imgs/hair.jpg", // replace with actual path
    html: `
      <h2>Hair Regrowth Treatments</h2>
            <p>Restore Your Crown of Confidence
</p>

      <p>Advanced hair restoration techniques that work with your body's natural healing processes to bring back thick, healthy hair.</p>
<h3>Proven Solutions</h3>
      <ul>
        <li>Hair PRP Therapy - Natural regrowth stimulation</li>
        <li>Hair GFC Treatment - Advanced growth factors</li>
        <li>Oxygen Laser Therapy - Scalp rejuvenation</li>
        <li>Combination Therapies - Maximized results</li>
      </ul>
      <button class="btn">Get Hair Assessment</button>
    `,
  },
  skin: {
    image: "./imgs/skin.jpg",
    html: `
      <h2>Skin Treatments</h2>
      <p>The Foundation of Radiant Confidence</p>
      <p>Transform your skin with our advanced treatments that address every concern from acne to aging, revealing your natural glow.</p>
      <h3>Featured Treatments</h3>
      <ul>
        <li>Hydrafacial - Instant glow and deep cleansing</li>
        <li>Chemical Peels - Skin renewal and texture improvement</li>
        <li>Laser Hair Reduction - Permanent hair removal</li>
        <li>Botox & Fillers - Anti-aging solutions</li>
        <li>Microneedling - Collagen stimulation</li>
        <li>Acne Treatment - Scar solutions</li>
      </ul>
      <button class="btn">Explore Skin Treatments</button>
    `,
  },
  makeup: {
    image: "./imgs/makeup.jpg",
    html: `
      <h2>Semi-Permanent Makeup</h2>
            <p>Wake Up Beautiful Every Day
</p>

      <p>Professional permanent makeup services designed for precision and lasting results that enhance your natural features.</p>
      <h3>Artistic Services</h3>

      <ul>
        <li>Eyebrow Microblading - Full brows</li>
        <li>Combination Brows - Texture and shading</li>
        <li>Ombre Brows - Gradient effect</li>
        <li>Lip Tinting - Color enhancement</li>
        <li>Lip Neutralization - Color correction</li>
        <li>Eyeliner Enhancement - Long-lasting definition</li>
      </ul>
      <button class="btn">Book Beauty Consultation</button>
    `,
  },
  dental: {
    image: "./imgs/dentist.jpg",
    html: `
      <h2>Dental Care</h2>
            <p>Your Perfect Smile Journey</p>

      <p>Comprehensive dental solutions that go beyond oral health to create smiles that boost confidence and transform lives.</p>
<h3>Complete Services</h3>
      <ul>
        <li>Dental Cleanings - Foundation of oral health</li>
        <li>Orthodontic Treatment - Straight teeth</li>
        <li>Dental Implants - Tooth replacement</li>
        <li>Crowns & Bridges - Restore function</li>
        <li>Root Canal Treatment - Save natural teeth</li>
        <li>Cosmetic Dentistry - Smile makeovers</li>
      </ul>
      <button class="btn">Schedule Dental Consultation</button>
    `,
  },
};

const boxes = document.querySelectorAll(".service-box");
const contentDiv = document.getElementById("serviceContent");
const imageDiv = document.getElementById("serviceImage");

if (boxes.length > 0 && contentDiv && imageDiv) {
  function loadService(service) {
    contentDiv.innerHTML = serviceContent[service].html;
    imageDiv.style.backgroundImage = `url('${serviceContent[service].image}')`;

    boxes.forEach((b) => b.classList.remove("active"));
    document
      .querySelector(`[data-service="${service}"]`)
      .classList.add("active");
  }

  // Initial load
  loadService("hair");

  // Add click listeners
  boxes.forEach((box) => {
    box.addEventListener("click", () => {
      const selected = box.dataset.service;
      loadService(selected);
    });
  });
}

// ================== SUB MENU ==================
function openSubMenu() {
  const subMenu = document.querySelector(".sub-menu");
  if (subMenu) {
    subMenu.classList.toggle("active");
  }
}
window.openSubMenu = openSubMenu; // make it work with inline onclick

function openMobileMenu() {
  document.getElementById("mobileMenu").style.display = "flex";
}

function closeMobileMenu() {
  document.getElementById("mobileMenu").style.display = "none";
}

function toggleMobileDropdown() {
  const submenu = document.getElementById("mobileSubmenu");
  submenu.style.display = submenu.style.display === "block" ? "none" : "block";
}
// ================== FAQ ==================
const questions = document.querySelectorAll(".faq-question");

if (questions.length > 0) {
  questions.forEach((q) => {
    q.addEventListener("click", () => {
      const isActive = q.classList.contains("active");

      // Close all
      questions.forEach((btn) => {
        btn.classList.remove("active");
        if (btn.nextElementSibling) {
          btn.nextElementSibling.style.maxHeight = null;
        }
      });

      // Open the clicked one if it wasn't already open
      if (!isActive) {
        q.classList.add("active");
        const answer = q.nextElementSibling;
        if (answer) {
          answer.style.maxHeight = answer.scrollHeight + "px";
        }
      }
    });
  });
}
//
const aboutData = {
  mission: `
        <h2>Our Mission</h2>
        <p>To provide safe, effective, and compassionate aesthetic treatments that restore confidence and enhance natural beauty. We exist to help every client discover their most beautiful self through personalized care, advanced techniques, and unwavering support.</p>
      `,
  vision: `
        <h2>Our Vision</h2>
        <p>To be Chennai's most trusted aesthetic destination, known for transforming lives through exceptional care, innovative treatments, and genuine compassion. We envision a world where everyone feels confident in their own skin.</p>
      `,
  values: `
        <h2>Our Values</h2>
        <ul>
          <li><strong>Integrity:</strong> Honest consultations and transparent treatment plans</li>
          <li><strong>Excellence:</strong> Uncompromising standards in every procedure</li>
          <li><strong>Compassion:</strong> Understanding each client's unique journey</li>
          <li><strong>Innovation:</strong> Staying at the forefront of aesthetic medicine</li>
          <li><strong> Safety:</strong> Your wellbeing is our highest priority</li>
        </ul>
      `,
};

const tabs = document.querySelectorAll(".abouttog-tab");
const content = document.getElementById("abouttogContent");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    // remove active from all
    tabs.forEach((t) => t.classList.remove("active"));
    // add active to clicked
    tab.classList.add("active");
    // update content
    const key = tab.getAttribute("data-tab");
    content.innerHTML = aboutData[key];
  });
});
//
const serviceDetails = {
  "carbon-glow": `
    <h2>Carbon Glow Peel / Hollywood Facial</h2>
    <p>The Carbon Glow Peel—often called the Hollywood Facial—is your go-to for instant, event-ready skin. It uses a layer of liquid carbon followed by laser pulses that deeply cleanse pores, exfoliate dead cells, and tighten the skin. The result is visibly smoother, matte, and radiant skin right after the session.</p>
    <p>Ideal for oily, acne-prone skin, or simply anyone wanting a refined glow, this treatment is non-invasive and pain-free. It’s a favorite among celebrities for its ability to make skin look flawless under lights and cameras.</p>
    <h3>Why People Love It:</h3>
    <ul>
      <li>No pain, peeling, or downtime</li>
      <li>Instant clarity and glow</li>
      <li>Perfect pre-event treatment</li>
    </ul>
    <h3>What It Treats:</h3>
    <ul>
      <li>Enlarged pores and blackheads</li>
      <li>Oily and congested skin</li>
      <li>Early pigmentation and uneven skin tone</li>
    </ul>
    <h3>Is It Right for You?</h3>
    <ul>
      <li>Suitable for all genders and skin types</li>
      <li>Especially great for oily or combination skin</li>
      <li>Safe for darker skin tones</li>
    </ul>
    <button class="skinser-btn">Experience the Hollywood Glow</button>
  `,

  dermaplaning: `
    <h2>Dermaplaning Facial</h2>
    <p>Dermaplaning is a gentle exfoliation method that uses a sterile surgical blade to remove dead skin cells and vellus hair (peach fuzz). It leaves the skin ultra-smooth, glowing, and more receptive to skincare products. It's perfect before big events or makeup application.</p>
    <p>At Adhia Aesthetic Clinic, our trained professionals ensure a comfortable and effective experience. This treatment suits all skin types and has zero downtime, making it an easy addition to your regular skin routine.</p>
    <h3>What It Does:</h3>
    <ul>
      <li>Gently exfoliates dead skin</li>
      <li>Removes fine facial hair for smooth makeup application</li>
      <li>Enhances the absorption of skincare products</li>
    </ul>
    <h3>Who Is It For?</h3>
    <ul>
      <li>Brides, models, and professionals wanting camera-ready skin</li>
      <li>People looking for instant smoothness without harsh treatments</li>
      <li>Safe for most skin types, including sensitive skin</li>
    </ul>
    <h3>What You’ll Notice After:</h3>
    <ul>
      <li>Brighter, more even skin tone</li>
      <li>Soft, smooth skin surface</li>
      <li>Immediate makeup readiness</li>
    </ul>
    <button class="skinser-btn">Reveal Smoother, Brighter Skin</button>
  `,

  prp: `
    <h2>Face PRP (Vampire Facial)</h2>
    <p>Also known as the Vampire Facial, Face PRP (Platelet Rich Plasma) uses your body’s own platelets to stimulate collagen production and improve skin texture. The treatment involves drawing a small amount of your blood, processing it to extract platelets, and re-injecting it into the skin.</p>
    <p>This natural regeneration therapy helps improve acne scars, fine lines, and overall skin tone. It’s a safe, effective, and holistic way to restore youthful radiance without synthetic fillers.</p>
    <h3>What Face PRP Helps With:</h3>
    <ul>
      <li>Acne scars and open pores</li>
      <li>Fine lines and early wrinkles</li>
      <li>Skin dullness and uneven texture</li>
    </ul>
    <h3>Why Choose PRP Over Synthetic Treatments:</h3>
    <ul>
      <li>Completely natural – uses your own body’s healing power</li>
      <li>No risk of allergic reactions</li>
      <li>Long-term skin rejuvenation from within</li>
    </ul>
    <h3>What to Expect After:</h3>
    <ul>
      <li>A few days of mild redness</li>
      <li>Gradual improvement in skin over 4–6 weeks</li>
      <li>Softer, firmer, younger-looking skin</li>
    </ul>
    <button class="skinser-btn">Rejuvenate Your Skin Naturally</button>
  `,

  microneedling: `
    <h2>Microneedling</h2>
    <p>Microneedling involves the use of tiny, sterile needles to create micro-injuries on the skin, triggering your body’s natural healing process. This encourages collagen and elastin production, which helps in reducing acne scars, fine lines, and uneven skin texture.</p>
    <p>At Adhia Aesthetic Clinic, we often combine microneedling with PRP for enhanced results. The treatment is minimally invasive and offers significant improvement with regular sessions.</p>
    <h3>What Microneedling Can Treat:</h3>
    <ul>
      <li>Acne scars and pitted skin</li>
      <li>Enlarged pores</li>
      <li>Stretch marks and fine lines</li>
      <li>Uneven tone and texture</li>
    </ul>
    <h3>What Makes It Effective:</h3>
    <ul>
      <li>Stimulates collagen naturally</li>
      <li>Enhances product absorption</li>
      <li>Can be combined with PRP or serums</li>
    </ul>
    <h3>What to Expect:</h3>
    <ul>
      <li>Redness for 1–2 days</li>
      <li>Visible improvements within 2–4 weeks</li>
      <li>Progressive benefits over multiple sessions</li>
    </ul>
    <button class="skinser-btn">Start Your Skin Renewal Today</button>
  `,

  "chemical-face": `
    <h2>Chemical Peels – Face</h2>
    <p>Facial chemical peels use medical-grade acids to exfoliate the outer layers of skin, encouraging new cell turnover. This results in smoother, clearer, and more radiant skin. Whether you’re dealing with pigmentation, acne scars, or dullness, there’s a peel for every concern.</p>
    <p>We offer light, medium, and deep peels based on your skin type and needs. All our peels are administered by trained experts to ensure safety and optimal results.</p>
    <h3>What They Help With:</h3>
    <ul>
      <li>Acne and acne marks</li>
      <li>Pigmentation and dark spots</li>
      <li>Dull and ageing skin</li>
    </ul>
    <h3>Types of Peels Offered:</h3>
    <ul>
      <li>Glycolic, lactic, salicylic, TCA peels</li>
      <li>Superficial to deep-strength options</li>
    </ul>
    <h3>Aftercare and Recovery:</h3>
    <ul>
      <li>Light flaking to mild peeling (varies by peel)</li>
      <li>Minimal downtime with proper care</li>
      <li>Visible brightness and smoothness in 3–7 days</li>
    </ul>
    <button class="skinser-btn">Find the Right Peel for Your Face</button>
  `,

  "chemical-body": `
    <h2>Chemical Peels – Body</h2>
    <p>Body chemical peels extend the benefits of facial peels to areas like the back, arms, neck, and underarms. They help reduce pigmentation, improve skin texture, and treat keratosis pilaris or body acne.</p>
    <p>These peels are especially helpful for those struggling with uneven skin tone or discoloration in larger areas. Treatments are spaced out for best results and noticeable improvement.</p>
    <h3>Conditions We Treat:</h3>
    <ul>
      <li>Back acne and dark marks</li>
      <li>Pigmentation in the underarms or neck</li>
      <li>Textural irregularities on arms and legs</li>
    </ul>
    <h3>Results You Can Expect:</h3>
    <ul>
      <li>Softer, clearer, and even-toned skin</li>
      <li>Reduced dark patches and spots</li>
      <li>Smoother feel after just a few sessions</li>
    </ul>
    <button class="skinser-btn">Schedule Your Body Peel Session</button>
  `,

  laser: `
    <h2>Laser Hair Reduction</h2>
    <p>Laser Hair Reduction at Adhia Aesthetic Clinic offers a long-term solution to unwanted hair. Using USFDA-approved technology, the laser targets hair follicles at the root, significantly reducing regrowth over time.</p>
    <p>It’s safe for all Indian skin tones and works on various body areas including the face, underarms, legs, and bikini line. Sessions are quick, comfortable, and offer smooth, hair-free skin.</p>
    <h3>Why Choose It:</h3>
    <ul>
      <li>No more waxing or shaving</li>
      <li>Long-lasting smoothness</li>
      <li>Quick, virtually painless sessions</li>
    </ul>
    <h3>Safe For:</h3>
    <ul>
      <li>Face, underarms, chest, back, bikini area</li>
      <li>All skin types with cooling mechanisms</li>
    </ul>
    <h3>Treatment Plan:</h3>
    <ul>
      <li>6–8 sessions for optimal results</li>
      <li>Maintenance sessions yearly</li>
      <li>Results improve with every visit</li>
    </ul>
    <button class="skinser-btn">Say Goodbye to Waxing Forever</button>
  `,

  tattoo: `
    <h2>Tattoo Removal</h2>
    <p>Got ink you’ve outgrown? Our advanced Q-switched laser breaks down tattoo pigment into particles that your body naturally eliminates. With each session, the tattoo fades gradually until barely visible.</p>
    <p>It’s safe, effective, and works on various ink types and skin tones. Our experienced team ensures minimal risk of scarring and maximum pigment breakdown.</p>
    <h3>Ideal For:</h3>
    <ul>
      <li>Fading or complete removal of body tattoos</li>
      <li>Safe on black and colored inks</li>
      <li>Custom plans based on tattoo type</li>
    </ul>
    <h3>What to Expect:</h3>
    <ul>
      <li>Slight redness or scabbing post-session</li>
      <li>Gradual fading over time</li>
      <li>Most tattoos removed in 6–10 sessions</li>
    </ul>
    <button class="skinser-btn">Begin Your Tattoo Removal Journey</button>
  `,

  acne: `
    <h2>Acne & Acne Scar Treatment</h2>
    <p>Struggling with breakouts and scars? Our comprehensive acne solutions include oral and topical medications, chemical peels, laser therapy, and microneedling. Every case is different, and so is our approach.</p>
    <p>We focus not just on clearing active acne but also on preventing recurrence and healing scars. Your skin will not only look better but feel healthier too.</p>
    <h3>Conditions Treated:</h3>
    <ul>
      <li>Hormonal or cystic acne</li>
      <li>Post-inflammatory hyperpigmentation</li>
      <li>Deep boxcar and ice-pick scars</li>
    </ul>
    <h3>Treatment Options Include:</h3>
    <ul>
      <li>Prescription skincare and oral medications</li>
      <li>Laser resurfacing and PRP</li>
      <li>Microneedling and peels</li>
    </ul>
    <button class="skinser-btn">Clear Skin Is Possible—Let’s Talk</button>
  `,

  botox: `
    <h2>Botox</h2>
    <p>Botox is the gold standard in wrinkle reduction. It relaxes facial muscles responsible for expression lines, resulting in smoother skin and a more youthful look. It’s quick, safe, and requires no recovery time.</p>
    <p>Commonly treated areas include forehead lines, frown lines, and crow’s feet. Our approach is subtle—we aim to refresh, not freeze.</p>
    <h3>Areas We Commonly Treat:</h3>
    <ul>
      <li>Forehead lines</li>
      <li>Crow’s feet (around the eyes)</li>
      <li>Frown lines (between brows)</li>
    </ul>
    <h3>Why It’s Popular:</h3>
    <ul>
      <li>Subtle, natural-looking results</li>
      <li>Safe, USFDA-approved</li>
      <li>Boosts confidence without surgery</li>
    </ul>
    <button class="skinser-btn">Refresh Your Look With Botox</button>
  `,

  fillers: `
    <h2>Fillers</h2>
    <p>Dermal fillers help restore lost volume, smooth lines, and contour facial features like the cheeks, jawline, and lips. We use FDA-approved hyaluronic acid fillers for natural-looking results.</p>
    <p>Whether it’s under-eye hollows or thinning lips, fillers offer immediate results with minimal discomfort. The effects last between 6 months to a year depending on the area.</p>
    <h3>Areas Fillers Can Treat:</h3>
    <ul>
      <li>Lips and cheeks</li>
      <li>Nasolabial folds (smile lines)</li>
      <li>Under-eye hollows and jawline</li>
    </ul>
    <h3>Benefits:</h3>
    <ul>
      <li>Quick results with minimal discomfort</li>
      <li>Non-surgical with instant volume</li>
      <li>Lasts 6–12 months depending on area</li>
    </ul>
    <button class="skinser-btn">Book a Personalized Filler Consultation</button>
  `,

  threads: `
    <h2>Threads (Thread Lift)</h2>
    <p>A thread lift is a minimally invasive alternative to facelift surgery. Special threads are inserted under the skin to lift sagging tissue, improve firmness, and stimulate collagen production.</p>
    <p>It’s ideal for mild to moderate skin laxity in areas like the cheeks, jawline, and neck. The results are natural, with little to no downtime.</p>
    <h3>What It Helps With:</h3>
    <ul>
      <li>Sagging cheeks or jawline</li>
      <li>Drooping eyebrows or neck</li>
      <li>Mild skin laxity in mid or lower face</li>
    </ul>
    <h3>Why It Works:</h3>
    <ul>
      <li>Collagen-boosting and lifting effect</li>
      <li>Quick recovery with local anesthesia</li>
      <li>Suitable for both men and women</li>
    </ul>
    <button class="skinser-btn">Lift Without Surgery—Ask Us About Thread Lifts</button>
  `,
};

const modal = document.getElementById("skinserModal");
const modalBody = document.getElementById("skinserModalBody");
const closeBtn = modal.querySelector(".skinser-close");

document.querySelectorAll(".skinser-card").forEach((card) => {
  card.addEventListener("click", () => {
    const targetId = card.getAttribute("data-target");
    modalBody.innerHTML =
      serviceDetails[targetId] || "<p>Content not found</p>";
    modal.style.display = "flex";
  });
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === modal) modal.style.display = "none";
});
