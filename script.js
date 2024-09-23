const questions = document.querySelectorAll(".question");
const resultDiv = document.getElementById("result");
const resultImage = document.getElementById("result-image");
const progressBar = document.getElementById("progress");
const sao = document.getElementById("sao");
const Descubre = document.getElementById("Descubre");
const restartButton = document.getElementById("restart-button");
let currentQuestion = 0;
let answers = {};

function showQuestion(index) {
  questions.forEach((q, i) => {
    if (i === index) {
      q.classList.remove("hidden");
    } else {
      q.classList.add("hidden");
    }
  });
}

function updateProgress() {
  const progress = ((currentQuestion + 1) / (questions.length - 1)) * 100;
  progressBar.style.width = `${progress}%`;
}

function resetQuiz() {
  currentQuestion = 0;
  answers = {};
  showQuestion(currentQuestion);
  updateProgress();
  document.getElementById("progress-bar").style.display = "block";
  document.getElementById("Descubre").style.display = "block";
  document.getElementById("sao").style.display = "block";
  resultImage.style.display = "none";
}

showQuestion(currentQuestion);
updateProgress();

questions.forEach((question, index) => {
  if (index < questions.length - 1) {
    const options = question.querySelectorAll(".option");
    options.forEach((option) => {
      option.addEventListener("click", () => {
        options.forEach((opt) => opt.classList.remove("selected"));
        option.classList.add("selected");
        const questionId = option.parentElement.id;
        answers[questionId] = option.dataset.value;

        setTimeout(() => {
          currentQuestion++;
          if (currentQuestion < questions.length - 1) {
            showQuestion(currentQuestion);
            updateProgress();
          } else {
            showResult();
          }
        }, 500);
      });
    });
  }
});

function showResult() {
  const epochs = Object.values(answers);
  const epochCounts = epochs.reduce((acc, epoch) => {
    acc[epoch] = (acc[epoch] || 0) + 1;
    return acc;
  }, {});

  const maxCount = Math.max(...Object.values(epochCounts));
  const dominantEpochs = Object.keys(epochCounts).filter(
    (epoch) => epochCounts[epoch] === maxCount
  );

  let r1 = "";
  let r2 = "";
  let imageUrl = "";
  let result = "";

  if (dominantEpochs.length === 1) {
    const epoch = dominantEpochs[0];
    switch (epoch) {
      case "90s":
        r1 =
          "¡Eres un auténtico Camba de los 90! En esta epoca Santa Cruz de la Sierra experimentó una transformación significativa debido al rápido crecimiento económico y la modernización. Este periodo se caracterizó por un aumento demográfico y una expansión de la infraestructura urbana, con nuevos barrios y avenidas como la Avenida Ballivián. Lugares emblemáticos como el Cine Palace, el Cine Florida y el Cine Arenal se convirtieron en centros de entretenimiento clave, mientras que la Plaza 24 de septiembre y el Parque El Arenal siguieron siendo puntos de encuentro y recreación.";
        r2 =
          "El camba de esta época mantenía una identidad regional orgullosa, influenciada por tradiciones como el taquirari y el bolero, aunque también se vio afectado por la globalización, con géneros internacionales como el pop latino ganando popularidad. <br> El carnaval de Santa Cruz era una celebración vibrante y alegre, con bandas en las calles, la noche de las mascaritas, y tres días de mojazón y diversión. Este evento reflejaba la esencia festiva de la ciudad, donde la comunidad se unía para celebrar con música, baile y color. Los jóvenes adoptaron estilos de vida sin perder sus raíces, reflejando una sociedad en transición que fusionaba lo tradicional con lo moderno.";
        imageUrl =
          "https://scontent.flpb3-2.fna.fbcdn.net/v/t1.6435-9/95389828_3015487261828088_3277209034968530944_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=25d718&_nc_ohc=fsipBOH2OisQ7kNvgFHxezf&_nc_ht=scontent.flpb3-2.fna&_nc_gid=AmF6d2DW9HVJfOnOXALxNvL&oh=00_AYAIbrUOJc-wxcbVfzLyB4mRwzn_DwB3JSZuq4rffX_4jA&oe=671502DD";
        break;
      case "00s":
        r1 =
          "¡Eres un Camba de la década del 2000! En esta epoca, el camba se destacó por su estilo de vida social, con lugares icónicos como el cine Center, Equipetrol, y el Café Lorca, donde la juventud se reunía para socializar. Las discotecas y bares de Equipetrol se convirtieron en los principales puntos de encuentro, ofreciendo un espacio vibrante para disfrutar de música y compañía. Cines como el cine center, Bella Vista y palace atraían a las multitudes, proporcionando una experiencia cinematográfica moderna.";
        r2 =
          "El Carnaval se celebraba en garajes, la Ballivian y el Corso en el segundo anillo, convirtiéndose en una manifestación cultural que unía a la comunidad. Durante esta década, géneros como el reguetón y la cumbia dominaban las fiestas, con artistas como Daddy Yankee y bandas de rock en español que también mantenían su relevancia. Este periodo reflejó la fusión de tradiciones y modernidad en la identidad del camba, resaltando su amor por la música y la celebración.";
        imageUrl =
          "https://scontent.flpb3-2.fna.fbcdn.net/v/t1.6435-9/50534753_239482850317390_1506090815611469824_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_ohc=OOOLsB_VE9gQ7kNvgFyTChy&_nc_ht=scontent.flpb3-2.fna&oh=00_AYB2TFLL-y62aK9mPfZ9aluo4oo79vvEd5HBZK3kg7o3NQ&oe=6714E27A";
        break;
      case "10s":
        r1 =
          "¡Eres un Camba moderno de la década del 2010! Los malls como Ventura, Las Brisas y el Parque Los Mangales son parte de tu ADN. Multicine, Cinemark y Cinecenter son tus cines favoritos. El Cambódromo, los garajes y las fraternidades son tu escenario para el carnaval. Pop, electrónica y cumbia tropical marcan tu ritmo. ¡Representas la Santa Cruz cosmopolita y en constante crecimiento!";

        r2 =
          "En esta época, Santa Cruz se consolidó como una metrópoli moderna. El Ventura Mall, Las Brisas y el Parque Los Mangales se convirtieron en lugares icónicos, ofreciendo no solo compras sino también espacios de esparcimiento. El cine se vivía en Cinemark, Cinecenter y Multicine, mientras que el carnaval evolucionó con el Cambódromo, garajes y fraternidades como epicentros. Tu identidad camba refleja una perfecta fusión entre las tradiciones cruceñas y una mentalidad global, adaptándote a los rápidos cambios tecnológicos y culturales sin perder tu esencia.";

        imageUrl =
          "img/10s.png";
        break;
      case "20s":
        r1 =
          "¡Eres un Camba de la nueva era! Aunque la pandemia cambió muchas cosas, tu amor por Santa Cruz sigue intacto. El Ventura Mall y la avenida Monseñor Rivero son tus lugares favoritos para disfrutar citas modernas y acogedoras. Sigues prefiriendo cines como Cine Center, Multicine y Cinemark. El género urbano, la cumbia y la electrónica son la banda sonora de tus eventos. Disfrutas del carnaval en fraternidades, en pueblos cercanos como Porongo o Samaipata, y, por supuesto, en el Cambódromo. ¡Representas la adaptabilidad y resiliencia del cruceño contemporáneo!";

        r2 =
          "Esta década ha traído desafíos únicos, pero también ha mostrado la capacidad de adaptación de los cambas. El Ventura Mall y la avenida Monseñor Rivero se destacan como lugares de encuentro modernos. Los cines Cine Center, Multicine y Cinemark siguen siendo puntos de referencia para el entretenimiento, mientras que la música urbana, la cumbia y la electrónica dominan las fiestas. El carnaval se disfruta tanto en el Cambódromo como en pueblos cercanos como Porongo y Samaipata, con fraternidades que continúan siendo parte esencial de la tradición. Tu perfil camba refleja una combinación de modernidad y tradición, manteniéndote conectado a tus raíces en tiempos de cambio.";

        imageUrl =
          "https://img.freepik.com/foto-gratis/chico-joven-inconformista-gafas-riendo-felizmente-aislado-blanco_146671-15519.jpg?t=st=1727096529~exp=1727100129~hmac=d44a486b859b073b7d8224f30073ad62e86066203a11e43b36d58b0d1458ae27&w=996";
        break;
    }
    result = r1 + imageUrl + r2;
  } else {
    result =
      "¡Eres un Camba único! Tu mezcla de gustos refleja la rica y diversa cultura de Santa Cruz a través de las décadas. ";

    if (dominantEpochs.includes("90s") && dominantEpochs.includes("00s")) {
      result +=
        "Combinas la nostalgia de los 90 con la energía de los 2000. Quizás disfrutaste de la transición de la Plaza 24 al Boulevard Monseñor Rivero, y viste cómo el Cine Palace dio paso al Cine Center. ¡Una mezcla fascinante de dos épocas de gran cambio para Santa Cruz!";
      imageUrl =
        "https://scontent.flpb3-2.fna.fbcdn.net/v/t1.6435-9/95389828_3015487261828088_3277209034968530944_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=25d718&_nc_ohc=fsipBOH2OisQ7kNvgFHxezf&_nc_ht=scontent.flpb3-2.fna&_nc_gid=AmF6d2DW9HVJfOnOXALxNvL&oh=00_AYAIbrUOJc-wxcbVfzLyB4mRwzn_DwB3JSZuq4rffX_4jA&oe=671502DD";
    } else if (
      dominantEpochs.includes("00s") &&
      dominantEpochs.includes("10s")
    ) {
      result +=
        "Tienes un pie en los 2000 y otro en la modernidad de los 2010. Viviste la evolución de los garajes del carnaval al Cambodromo, y el paso de la cumbia al pop y la electrónica. ¡Eres testigo del rápido desarrollo urbano y cultural de la ciudad!";
      imageUrl =
        "https://scontent.flpb3-2.fna.fbcdn.net/v/t1.6435-9/50534753_239482850317390_1506090815611469824_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_ohc=OOOLsB_VE9gQ7kNvgFyTChy&_nc_ht=scontent.flpb3-2.fna&oh=00_AYB2TFLL-y62aK9mPfZ9aluo4oo79vvEd5HBZK3kg7o3NQ&oe=6714E27A";
    } else if (
      dominantEpochs.includes("10s") &&
      dominantEpochs.includes("20s")
    ) {
      result +=
        "Eres la perfecta fusión entre la década pasada y la actualidad. Has visto nacer los grandes malls y cómo el carnaval se ha adaptado a los nuevos tiempos. Tu música va desde el pop hasta el reggaetón moderno. ¡Representas la Santa Cruz más cosmopolita y conectada con el mundo!";
      imageUrl =
        "https://scontent.flpb3-2.fna.fbcdn.net/v/t1.6435-9/50534753_239482850317390_1506090815611469824_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_ohc=OOOLsB_VE9gQ7kNvgFyTChy&_nc_ht=scontent.flpb3-2.fna&oh=00_AYB2TFLL-y62aK9mPfZ9aluo4oo79vvEd5HBZK3kg7o3NQ&oe=6714E27A";
    } else if (
      dominantEpochs.includes("90s") &&
      dominantEpochs.includes("10s")
    ) {
      result +=
        "¡Qué contraste! Mezclas lo mejor de los 90 con la modernidad de los 2010. Quizás añoras el Cine Palace pero disfrutas de Multicine, o prefieres el taquirari pero también te mueves con la electrónica. ¡Tu perfil demuestra cómo Santa Cruz ha evolucionado manteniendo sus raíces!";
      imageUrl = "";
    } else if (
      dominantEpochs.includes("90s") &&
      dominantEpochs.includes("20s")
    ) {
      result +=
        "¡Wow! Tienes un pie en los 90 y otro en el presente. Tal vez prefieres la Plaza 24 pero también disfrutas de Las Brisas Mall, o te gusta tanto el pop latino como el reggaetón moderno. ¡Tu perfil es un testimonio viviente de cómo Santa Cruz ha cambiado en las últimas tres décadas!";
      imageUrl =
        "img/10s.png";
    } else if (
      dominantEpochs.includes("00s") &&
      dominantEpochs.includes("20s")
    ) {
      result +=
        "Fusionas la energía de los 2000 con la innovación de la actualidad. Quizás prefieres el Cine Center pero también disfrutas del IMAX, o te gusta tanto la cumbia como la música urbana. ¡Tu perfil refleja cómo Santa Cruz ha mantenido su esencia mientras se moderniza!";
      imageUrl =
        "https://img.freepik.com/foto-gratis/chico-joven-inconformista-gafas-riendo-felizmente-aislado-blanco_146671-15519.jpg?t=st=1727096529~exp=1727100129~hmac=d44a486b859b073b7d8224f30073ad62e86066203a11e43b36d58b0d1458ae27&w=996";
    }
  }

  resultDiv.innerHTML = `<p>${r1}</p><img src="${imageUrl}" alt="Santa Cruz" style="max-width: 100%; height: auto; margin: 20px 0;"><p>${r2}</p>`;
  showQuestion(questions.length - 1);
  document.getElementById("Descubre").style.display = "none";
  document.getElementById("progress-bar").style.display = "none";
  document.getElementById("sao").style.display = "none";
  confetti({
    particleCount: 150,
    spread: 70,
    origin: { y: 0.6 },
  });
}

restartButton.addEventListener("click", resetQuiz);
