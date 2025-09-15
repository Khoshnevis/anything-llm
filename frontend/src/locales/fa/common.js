// Anything with "null" requires a translation. Contribute to translation via a PR!
const TRANSLATIONS = {
  onboarding: {
    survey: {
      email: "ایمیل",
      useCase: "مورد استفاده",
      useCaseWork: "کاری",
      useCasePersonal: "شخصی",
      useCaseOther: "سایر",
      comment: "نظر",
      commentPlaceholder: "نظر خود را بنویسید...",
      skip: "رد شدن",
      thankYou: "متشکریم!",
      title: "نظرسنجی",
      description: "با شرکت در نظرسنجی به بهبود XehnAI کمک کنید",
    },
    home: {
      title: "خوش آمدید به XehnAI",
      getStarted: "شروع کنید",
    },
    llm: {
      title: "انتخاب LLM",
      description: "مدل زبانی بزرگ مورد نظر خود را انتخاب کنید",
    },
    userSetup: {
      title: "تنظیم کاربر",
      description: "حساب مدیر و تنظیمات امنیتی را پیکربندی کنید",
      howManyUsers: "چند کاربر از این سیستم استفاده خواهند کرد؟",
      justMe: "فقط من",
      myTeam: "تیم من",
      instancePassword: "رمز عبور نمونه",
      setPassword: "تنظیم رمز عبور",
      passwordReq: "رمز عبور الزامی است",
      passwordWarn: "رمز عبور قوی انتخاب کنید",
      adminUsername: "نام کاربری مدیر",
      adminUsernameReq: "نام کاربری مدیر الزامی است",
      adminPassword: "رمز عبور مدیر",
      adminPasswordReq: "رمز عبور مدیر الزامی است",
      teamHint: "برای استفاده تیمی، حساب مدیر ایجاد کنید",
    },
    data: {
      title: "مدیریت داده",
      description: "اسناد و داده‌های خود را آپلود کنید",
      settingsHint: "بعداً می‌توانید در تنظیمات تغییر دهید",
    },
    workspace: {
      title: "فضای کاری",
      description: "اولین فضای کاری خود را ایجاد کنید"
    },
  },
  common: {
    "workspaces-name": "نام فضای کار",
    error: "خطا",
    success: "موفق",
    user: "کاربر",
    selection: "انتخاب مدل",
    saving: "در حال ذخیره...",
    save: "ذخیره تغییرات",
    previous: "صفحه قبلی",
    next: "صفحه بعدی",
    optional: "اختیاری",
    yes: "بله",
    no: "خیر",
    search: "جستجو",
  },
  settings: {
    title: "تنظیمات سامانه",
    system: "تنظیمات عمومی",
    invites: "دعوت‌نامه‌ها",
    users: "کاربران",
    workspaces: "فضاهای کاری",
    "workspace-chats": "گفتگوهای فضای کاری",
    customization: "شخصی‌سازی",
    "api-keys": "API توسعه‌دهندگان",
    llm: "مدل زبانی",
    transcription: "رونویسی",
    embedder: "جاسازی",
    "text-splitting": "تقسیم متن و تکه‌بندی",
    "voice-speech": "صدا و گفتار",
    "vector-database": "پایگاه داده برداری",
    embeds: "جاسازی گفتگو",
    "embed-chats": "تاریخچه گفتگوهای جاسازی شده",
    security: "امنیت",
    "event-logs": "گزارش رویدادها",
    privacy: "حریم خصوصی و داده‌ها",
    "ai-providers": "ارائه‌دهندگان هوش مصنوعی",
    "agent-skills": "مهارت‌های دستیار",
    admin: "مدیریت",
    tools: "ابزارها",
    "experimental-features": "ویژگی‌های آزمایشی",
    contact: "تماس با پشتیبانی",
    "browser-extension": "افزونه مرورگر",
    "system-prompt-variables": "متغیرهای پیش‌متن سیستم",
    system_prompt_variables: {
      title: "متغیرهای پیش‌متن سیستم",
      description:
        "متغیرهای پیش‌متن سیستم برای ذخیره مقادیر پیکربندی استفاده می‌شوند تا بتوانید در پیش‌متن سیستم به آن‌ها ارجاع دهید و محتوای پویا را در پرامپت‌ها فعال کنید.",
      add: "افزودن متغیر",
      none: "متغیری یافت نشد",
      table: {
        key: "کلید",
        value: "مقدار",
        description: "توضیح",
        type: "نوع",
      },
    },
    audio: {
      stt: {
        title: "ترجیحات تبدیل گفتار به متن",
        description:
          "در اینجا می‌توانید نوع ارائه‌دهندگان تبدیل متن به گفتار و گفتار به متن را که می‌خواهید در XehnAI استفاده کنید مشخص کنید. به‌صورت پیش‌فرض از پشتیبانی داخلی مرورگر استفاده می‌کنیم، اما می‌توانید از گزینه‌های دیگر نیز استفاده کنید.",
        provider: "ارائه‌دهنده",
        native_name: "سیستم بومی",
        native_desc: "در صورت پشتیبانی، از سرویس تبدیل گفتار به متن داخلی مرورگر شما استفاده می‌کند.",
        native_note: "برای این ارائه‌دهنده نیازی به پیکربندی نیست.",
      },
      tts: {
        title: "ترجیحات تبدیل متن به گفتار",
        description:
          "در اینجا می‌توانید نوع ارائه‌دهندگان تبدیل متن به گفتار را که می‌خواهید در XehnAI استفاده کنید مشخص کنید. به‌صورت پیش‌فرض از پشتیبانی داخلی مرورگر استفاده می‌کنیم، اما می‌توانید از گزینه‌های دیگر نیز استفاده کنید.",
        provider: "ارائه‌دهنده",
        native_name: "سیستم بومی",
        native_desc: "در صورت پشتیبانی، از سرویس تبدیل متن به گفتار داخلی مرورگر شما استفاده می‌کند.",
        native_note: "برای این ارائه‌دهنده نیازی به پیکربندی نیست.",
      },
    },
    interface: "ترجیحات رابط کاربری",
    branding: "برندسازی",
    chat: "گفتگو",
  },
  login: {
    "multi-user": {
      welcome: "خوش آمدید به",
      "placeholder-username": "نام کاربری",
      "placeholder-password": "رمز عبور",
      login: "ورود",
      validating: "در حال اعتبارسنجی...",
      "forgot-pass": "فراموشی رمز عبور",
      reset: "بازنشانی",
    },
    "sign-in": {
      start: "ورود به حساب",
      end: "کاربری شما.",
    },
    "password-reset": {
      title: "بازنشانی رمز عبور",
      description: "برای بازنشانی رمز عبور خود، اطلاعات لازم را وارد کنید.",
      "recovery-codes": "کدهای بازیابی",
      "recovery-code": "کد بازیابی {{index}}",
      "back-to-login": "بازگشت به صفحه ورود",
    },
  },
  welcomeMessage: {
    part1:
      "به XehnAI خوش آمدید. XehnAI یک ابزار متن‌باز است که هر نوع داده‌ای را به یک دستیار هوشمند قابل مکالمه تبدیل می‌کند. XehnAI به‌صورت BYOK (کلیدهای خودتان) کار می‌کند؛ بنابراین خارج از سرویس‌هایی که خودتان انتخاب می‌کنید، هزینه و اشتراکی ندارد.",
    part2:
      "XehnAI ساده‌ترین راه برای کنار هم آوردن سرویس‌های قدرتمند هوش مصنوعی مانند OpenAI، GPT‑4، LangChain، PineconeDB، ChromaDB و دیگر سرویس‌ها در یک پکیج یکپارچه و بدون دردسر برای افزایش چشمگیر بهره‌وری شماست.",
    part3:
      "XehnAI می‌تواند کاملاً محلی و با حداقل مصرف منابع روی دستگاه شما اجرا شود—بدون نیاز به GPU. نصب ابری و درون‌سازمانی نیز فراهم است.\nاکوسیستم ابزارهای هوش مصنوعی هر روز قدرتمندتر می‌شود و XehnAI استفاده از آن را برای شما ساده می‌کند.",
    githubIssue: "ایجاد مسئله در گیت‌هاب",
    user1: "چطور شروع کنم؟!",
    part4:
      "خیلی ساده است. تمام مجموعه‌ها در سطل‌هایی که ما «فضای کاری» می‌نامیم سازماندهی شده‌اند. فضاهای کاری، سطل‌هایی از فایل‌ها، اسناد، تصاویر، PDF‌ها و سایر فایل‌ها هستند که به چیزی تبدیل می‌شوند که LLM‌ها می‌توانند درک کنند و در مکالمه استفاده کنند.\n\nشما می‌توانید در هر زمان فایل‌ها را اضافه و حذف کنید.",
    createWorkspace: "ایجاد اولین فضای کاری",
    user2:
      "آیا این مثل یک دراپ‌باکس هوشمند است یا چیز دیگری؟ پس گفتگو چی؟ مگر این یک ربات گفتگو نیست؟",
    part5:
      "XehnAI بیشتر از یک دراپ‌باکس هوشمند است.\n\nXehnAI دو روش برای صحبت با داده‌های شما ارائه می‌دهد:\n\n<i>پرس‌وجو:</i> گفتگوهای شما داده‌ها یا استنباط‌های یافت شده در اسناد فضای کاری که به آن دسترسی دارد را برمی‌گرداند. افزودن اسناد بیشتر به فضای کاری آن را هوشمندتر می‌کند!\n\n<i>مکالمه‌ای:</i> اسناد شما + تاریخچه گفتگوی جاری شما هر دو همزمان به دانش LLM کمک می‌کنند. برای افزودن اطلاعات متنی بلادرنگ یا اصلاح اشتباهات و سوءتفاهم‌هایی که LLM ممکن است داشته باشد، عالی است.\n\nشما می‌توانید بین هر دو حالت \n<i>در وسط گفتگو!</i> جابجا شوید.",
    user3: "وای، این عالی به نظر می‌رسد، بگذارید همین حالا امتحانش کنم!",
    part6: "خوش بگذره!",
    starOnGitHub: "ستاره در گیت‌هاب",
    contact: "تماس با پشتیبانی",
  },
  "new-workspace": {
    title: "فضای کاری جدید",
    placeholder: "فضای کاری من",
  },
  "workspaces—settings": {
    general: "تنظیمات عمومی",
    chat: "تنظیمات گفتگو",
    vector: "پایگاه داده برداری",
    members: "اعضا",
    agent: "پیکربندی دستیار",
  },
  general: {
    vector: {
      title: "تعداد بردارها",
      description: "تعداد کل بردارها در پایگاه داده برداری شما.",
    },
    names: {
      description: "این فقط نام نمایشی فضای کاری شما را تغییر خواهد داد.",
    },
    message: {
      title: "پیام‌های گفتگوی پیشنهادی",
      description:
        "پیام‌هایی که به کاربران فضای کاری پیشنهاد می‌شود را شخصی‌سازی کنید.",
      add: "افزودن پیام جدید",
      save: "ذخیره پیام‌ها",
      heading: "برایم توضیح بده",
      body: "مزایای XehnAI را",
    },
    pfp: {
      title: "تصویر پروفایل دستیار",
      description: "تصویر پروفایل دستیار را برای این فضای کاری شخصی‌سازی کنید.",
      image: "تصویر فضای کاری",
      remove: "حذف تصویر فضای کاری",
    },
    delete: {
      title: "حذف فضای کاری",
      description:
        "این فضای کاری و تمام داده‌های آن را حذف کنید. این کار فضای کاری را برای همه کاربران حذف خواهد کرد.",
      delete: "حذف فضای کاری",
      deleting: "در حال حذف فضای کاری...",
      "confirm-start": "شما در حال حذف کامل",
      "confirm-end":
        "فضای کاری هستید. این کار تمام جاسازی‌های برداری را از پایگاه داده برداری شما حذف خواهد کرد.\n\nفایل‌های اصلی منبع دست نخورده باقی خواهند ماند. این عمل برگشت‌ناپذیر است.",
    },
  },
  chat: {
    llm: {
      title: "ارائه‌دهنده LLM فضای کاری",
      description:
        "ارائه‌دهنده و مدل LLM خاصی که برای این فضای کاری استفاده خواهد شد. به طور پیش‌فرض، از ارائه‌دهنده و تنظیمات LLM سیستم استفاده می‌کند.",
      search: "جستجوی تمام ارائه‌دهندگان LLM",
    },
    model: {
      title: "مدل گفتگوی فضای کاری",
      description:
        "مدل گفتگوی خاصی که برای این فضای کاری استفاده خواهد شد. اگر خالی باشد، از ترجیحات LLM سیستم استفاده خواهد کرد.",
      wait: "-- در انتظار مدل‌ها --",
    },
    mode: {
      title: "حالت گفتگو",
      chat: {
        title: "گفتگو",
        "desc-start": "پاسخ‌ها را با دانش عمومی LLM",
        and: "و",
        "desc-end": "محتوای اسناد یافت شده ارائه می‌دهد.",
      },
      query: {
        title: "پرس‌وجو",
        "desc-start": "پاسخ‌ها را",
        only: "فقط",
        "desc-end": "در صورت یافتن محتوای اسناد ارائه می‌دهد.",
      },
    },
    history: {
      title: "تاریخچه گفتگو",
      "desc-start":
        "تعداد گفتگوهای قبلی که در حافظه کوتاه‌مدت پاسخ گنجانده خواهد شد.",
      recommend: "پیشنهاد: ۲۰. ",
      "desc-end":
        "بیش از ۴۵ احتمالاً منجر به شکست مداوم گفتگو می‌شود که به اندازه پیام‌ها بستگی دارد.",
    },
    prompt: {
      title: "پیش‌متن",
      description:
        "پیش‌متنی که در این فضای کاری استفاده خواهد شد. زمینه و دستورالعمل‌ها را برای تولید پاسخ توسط هوش مصنوعی تعریف کنید. باید یک پیش‌متن دقیق ارائه دهید تا هوش مصنوعی بتواند پاسخی مرتبط و دقیق تولید کند.",
      history: {
        title: "تاریخچه پیش‌متن",
        clearAll: "پاک کردن همه",
        noHistory: "هیچ تاریخچه‌ای وجود ندارد",
        restore: "بازیابی",
        delete: "حذف",
        deleteConfirm: "آیا مطمئن هستید که می‌خواهید این پیش‌متن را حذف کنید؟",
        clearAllConfirm: "آیا مطمئن هستید که می‌خواهید تمام پیش‌متن‌ها را پاک کنید؟",
        expand: "گسترش",
        publish: "انتشار"
      },
    },
    refusal: {
      title: "پاسخ رد در حالت پرس‌وجو",
      "desc-start": "در حالت",
      query: "پرس‌وجو",
      "desc-end":
        "ممکن است بخواهید هنگامی که هیچ محتوایی یافت نمی‌شود، یک پاسخ رد سفارشی برگردانید.",
      "tooltip-title": "پاسخ رد سفارشی",
      "tooltip-description": "پیامی که هنگام عدم یافتن محتوای مرتبط نمایش داده می‌شود"
    },
    temperature: {
      title: "دمای LLM",
      "desc-start":
        'این تنظیم میزان "خلاقیت" پاسخ‌های LLM شما را کنترل می‌کند.',
      "desc-end":
        "هر چه عدد بالاتر باشد، خلاقیت بیشتر است. برای برخی مدل‌ها، تنظیم بسیار بالا می‌تواند منجر به پاسخ‌های نامفهوم شود.",
      hint: "اکثر LLMها محدوده‌های مختلفی از مقادیر معتبر را دارند. برای این اطلاعات به ارائه‌دهنده LLM خود مراجعه کنید.",
    },
  },
  "vector-workspace": {
    identifier: "شناسه پایگاه داده برداری",
    snippets: {
      title: "حداکثر قطعات متنی",
      description:
        "این تنظیم حداکثر تعداد قطعات متنی که برای هر گفتگو یا پرس‌وجو به LLM ارسال می‌شود را کنترل می‌کند.",
      recommend: "پیشنهادی: 4",
    },
    doc: {
      title: "آستانه شباهت سند",
      description:
        "حداقل امتیاز شباهت مورد نیاز برای اینکه یک منبع مرتبط با گفتگو در نظر گرفته شود. هر چه عدد بالاتر باشد، منبع باید شباهت بیشتری با گفتگو داشته باشد.",
      zero: "بدون محدودیت",
      low: "پایین (امتیاز شباهت ≥ .25)",
      medium: "متوسط (امتیاز شباهت ≥ .50)",
      high: "بالا (امتیاز شباهت ≥ .75)",
    },
    reset: {
      reset: "بازنشانی پایگاه داده برداری",
      resetting: "در حال پاک کردن بردارها...",
      confirm:
        "شما در حال بازنشانی پایگاه داده برداری این فضای کاری هستید. این کار تمام جاسازی‌های برداری فعلی را حذف خواهد کرد.\n\nفایل‌های اصلی منبع دست نخورده باقی خواهند ماند. این عمل برگشت‌ناپذیر است.",
      error: "بازنشانی پایگاه داده برداری فضای کاری امکان‌پذیر نبود!",
      success: "پایگاه داده برداری فضای کاری بازنشانی شد!",
    },
  },
  agent: {
    "performance-warning":
      "عملکرد LLMهایی که به طور صریح از فراخوانی ابزار پشتیبانی نمی‌کنند، به شدت به قابلیت‌ها و دقت مدل وابسته است. برخی توانایی‌ها ممکن است محدود یا غیرفعال باشند.",
    provider: {
      title: "ارائه‌دهنده LLM دستیار فضای کاری",
      description:
        "ارائه‌دهنده و مدل LLM خاصی که برای دستیار @agent این فضای کاری استفاده خواهد شد."
    },
    mode: {
      chat: {
        title: "مدل گفتگوی دستیار فضای کاری",
        description:
          "مدل گفتگوی خاصی که برای دستیار @agent این فضای کاری استفاده خواهد شد."
      },
      title: "مدل دستیار فضای کاری",
      description:
        "مدل LLM خاصی که برای دستیار @agent این فضای کاری استفاده خواهد شد.",
      wait: "-- در انتظار مدل‌ها --",
    },
    skill: {
      title: "مهارت‌های پیش‌فرض دستیار",
      description:
        "توانایی‌های طبیعی دستیار پیش‌فرض را با این مهارت‌های از پیش ساخته شده بهبود دهید. این تنظیمات برای تمام فضاهای کاری اعمال می‌شود.",
      rag: {
        title: "RAG و حافظه بلندمدت",
        description:
          'به دستیار اجازه دهید از اسناد محلی شما برای پاسخ به پرس‌وجو استفاده کند یا از دستیار بخواهید قطعات محتوا را برای بازیابی حافظه بلندمدت "به خاطر بسپارد".',
      },
      view: {
        title: "مشاهده و خلاصه‌سازی اسناد",
        description:
          "به دستیار اجازه دهید محتوای فایل‌های جاسازی شده فعلی فضای کاری را فهرست و خلاصه کند.",
      },
      scrape: {
        title: "استخراج از وب‌سایت‌ها",
        description:
          "به دستیار اجازه دهید محتوای وب‌سایت‌ها را بازدید و استخراج کند.",
      },
      generate: {
        title: "تولید نمودارها",
        description:
          "به دستیار پیش‌فرض امکان تولید انواع مختلف نمودار از داده‌های ارائه شده یا داده شده در گفتگو را بدهید."
      },
      save: {
        title: "تولید و ذخیره فایل‌ها در مرورگر",
        description:
          "به دستیار پیش‌فرض امکان تولید و نوشتن در فایل‌هایی که ذخیره می‌شوند و می‌توانند در مرورگر شما دانلود شوند را بدهید.",
      },
      web: {
        title: "جستجو و مرور زنده وب",
        "desc-start":
          "با اتصال به یک ارائه‌دهنده جستجوی وب (SERP)، به دستیار خود امکان جستجو در وب برای پاسخ به سؤالات خود را بدهید.",
        "desc-end":
          "جستجوی وب در طول جلسات دستیار تا زمانی که این تنظیم نشود، کار نخواهد کرد.",
      },
    },
  },
  recorded: {
    title: "گفتگوهای فضای کاری",
    description:
      "این‌ها تمام گفتگوها و پیام‌های ثبت شده هستند که توسط کاربران ارسال شده‌اند و بر اساس تاریخ ایجاد مرتب شده‌اند.",
    export: "خروجی‌گیری",
    table: {
      id: "شناسه",
      by: "ارسال شده توسط",
      workspace: "فضای کاری",
      prompt: "درخواست",
      response: "پاسخ",
      at: "زمان ارسال",
    },
  },
  api: {
    title: "کلیدهای API",
    description:
      "کلیدهای API به دارنده آن‌ها اجازه می‌دهند به‌صورت برنامه‌نویسی به این نمونه XehnAI دسترسی داشته و آن را مدیریت کند.",
    link: "مطالعه مستندات API",
    generate: "ایجاد کلید API جدید",
    table: {
      key: "کلید API",
      by: "ایجاد شده توسط",
      created: "تاریخ ایجاد",
    },
  },
  llm: {
    title: "ترجیحات مدل زبانی",
    description:
      "این‌ها اعتبارنامه‌ها و تنظیمات ارائه‌دهنده مدل زبانی و جاسازی انتخابی شما هستند. مهم است که این کلیدها به‌روز و صحیح باشند؛ در غیر این صورت XehnAI به‌درستی کار نخواهد کرد.",
    provider: "ارائه‌دهنده مدل زبانی",
    providers: {
      azure_openai: {
        azure_service_endpoint: "نقطه پایانی سرویس Azure",
        api_key: "کلید API",
        chat_deployment_name: "نام استقرار گفتگو",
        chat_model_token_limit: "حد توکن مدل گفتگو",
        model_type: "نوع مدل",
        default: "پیش‌فرض",
        reasoning: "استدلال"
      },
    },
  },
  transcription: {
    title: "ترجیحات مدل رونویسی",
    description:
      "این‌ها اعتبارنامه‌ها و تنظیمات ارائه‌دهنده مدل رونویسی انتخابی شما هستند. مهم است که این کلیدها به‌روز و صحیح باشند در غیر این صورت فایل‌های رسانه و صوتی رونویسی نخواهند شد.",
    provider: "ارائه‌دهنده رونویسی",
    "warn-start":
      "استفاده از مدل محلی Whisper روی دستگاه‌هایی با RAM یا CPU محدود می‌تواند هنگام پردازش فایل‌های رسانه‌ای باعث توقف XehnAI شود.",
    "warn-recommend":
      "ما حداقل ۲ گیگابایت RAM و آپلود فایل‌های کمتر از ۱۰ مگابایت را توصیه می‌کنیم.",
    "warn-end": "مدل داخلی در اولین استفاده به صورت خودکار دانلود خواهد شد.",
  },
  embedding: {
    title: "ترجیحات جاسازی",
    "desc-start":
      "هنگام استفاده از یک LLM که به طور پیش‌فرض از موتور جاسازی پشتیبانی نمی‌کند - ممکن است نیاز به تعیین اعتبارنامه‌های اضافی برای جاسازی متن داشته باشید.",
    "desc-end":
      "جاسازی فرآیند تبدیل متن به بردارها است. این اعتبارنامه‌ها برای تبدیل فایل‌ها و درخواست‌های شما به فرمتی که XehnAI بتواند پردازش کند ضروری هستند.",
    provider: {
      title: "ارائه‌دهنده جاسازی",
    },
  },
  text: {
    title: "تقسیم متن و تکه‌بندی",
    "desc-start":
      "تقسیم متن به شما امکان می‌دهد اسناد بزرگ را به بخش‌های کوچک‌تر تقسیم کنید که برای جاسازی و پردازش مناسب‌تر هستند.",
    "desc-end":
      "سعی کنید تعادلی بین اندازه بخش و همپوشانی ایجاد کنید تا از دست رفتن اطلاعات را به حداقل برسانید.",
    size: {
      title: "حداکثر اندازه بخش",
      description:
        "این حداکثر تعداد کاراکترهایی است که می‌تواند در یک بردار وجود داشته باشد.",
      recommend: "حداکثر طول مدل جاسازی",
    },
    overlap: {
      title: "همپوشانی بخش‌های متن",
      description:
        "این حداکثر همپوشانی کاراکترها است که در هنگام تکه‌بندی بین دو بخش متن مجاور رخ می‌دهد.",
    },
  },
  vector: {
    title: "پایگاه داده برداری",
    description:
      "این‌ها اعتبارنامه‌ها و تنظیمات نحوه عملکرد نمونه XehnAI شما هستند. مهم است که این کلیدها به‌روز و صحیح باشند.",
    provider: {
      title: "ارائه‌دهنده پایگاه داده برداری",
      description: "برای LanceDB نیازی به پیکربندی نیست.",
    },
  },
  embeddable: {
    title: "جاسازی گفتگو",
    description:
      "جاسازی گفتگو به شما امکان می‌دهد گفتگوی فضای کاری را در وب‌سایت یا برنامه خود قرار دهید.",
    create: "ایجاد جاسازی جدید",
    table: {
      workspace: "فضای کاری",
      chats: "گفتگوهای ارسال شده",
      active: "دامنه‌های فعال",
      created: "تاریخ ایجاد",
    },
  },
  "embed-chats": {
    title: "گفتگوهای جاسازی شده",
    export: "خروجی‌گیری",
    description:
      "این لیست تمام گفتگوها و پیام‌های ثبت شده از هر جاسازی که منتشر کرده‌اید را نشان می‌دهد.",
    table: {
      embed: "جاسازی",
      sender: "فرستنده",
      message: "پیام",
      response: "پاسخ",
      at: "زمان ارسال",
    },
  },
  event: {
    title: "گزارش رویدادها",
    description:
      "مشاهده تمام اقدامات و رویدادهای در حال وقوع در این نمونه برای نظارت.",
    clear: "پاک کردن گزارش رویدادها",
    table: {
      type: "نوع رویداد",
      user: "کاربر",
      occurred: "زمان وقوع",
    },
  },
  privacy: {
    title: "حریم خصوصی و مدیریت داده‌ها",
    description:
      "این پیکربندی شما برای نحوه مدیریت داده‌ها توسط ارائه‌دهندگان شخص ثالث متصل و XehnAI است.",
    llm: "انتخاب مدل زبانی",
    embedding: "ترجیحات جاسازی",
    vector: "پایگاه داده برداری",
    anonymous: "ارسال تله‌متری ناشناس فعال است",
  },
  connectors: {
    "search-placeholder": "جستجو در اتصال‌دهنده‌ها...",
    "no-connectors": "هیچ اتصال‌دهنده‌ای یافت نشد",
    github: {
      name: "GitHub",
      description: "اتصال به مخزن GitHub برای وارد کردن فایل‌ها",
      URL: "آدرس مخزن GitHub",
      URL_explained: "آدرس کامل مخزن GitHub را وارد کنید",
      token: "توکن دسترسی GitHub",
      optional: "اختیاری",
      token_explained: "توکن دسترسی شخصی GitHub",
      token_explained_start: "برای دسترسی به مخازن خصوصی",
      token_explained_link1: "راهنمای توکن GitHub",
      token_explained_middle: "یا برای دسترسی به مخازن عمومی",
      token_explained_link2: "اینجا کلیک کنید",
      token_explained_end: "برای اطلاعات بیشتر",
      ignores: "فایل‌های نادیده گرفته شده",
      git_ignore: "فایل .gitignore را رعایت کنید",
      task_explained: "این عملیات ممکن است چند دقیقه طول بکشد",
      branch: "شاخه مخزن",
      branch_loading: "در حال بارگذاری شاخه‌ها...",
      branch_explained: "شاخه‌ای که می‌خواهید فایل‌ها را از آن جمع‌آوری کنید",
      token_information: "اطلاعات توکن GitHub",
      token_personal: "توکن دسترسی شخصی GitHub",
    },
    gitlab: {
      name: "GitLab",
      description: "اتصال به مخزن GitLab برای وارد کردن فایل‌ها",
      URL: "آدرس مخزن GitLab",
      URL_explained: "آدرس کامل مخزن GitLab را وارد کنید",
      token: "توکن دسترسی GitLab",
      optional: "اختیاری",
      token_explained: "توکن دسترسی شخصی GitLab",
      token_description: "توکن برای دسترسی به مخازن خصوصی",
      token_explained_start: "برای دسترسی به مخازن خصوصی",
      token_explained_link1: "راهنمای توکن GitLab",
      token_explained_middle: "یا برای دسترسی به مخازن عمومی",
      token_explained_link2: "اینجا کلیک کنید",
      token_explained_end: "برای اطلاعات بیشتر",
      fetch_issues: "دریافت مسائل و درخواست‌های ادغام",
      ignores: null,
      git_ignore: null,
      task_explained: null,
      branch: null,
      branch_loading: null,
      branch_explained: null,
      token_information: null,
      token_personal: null,
    },
    youtube: {
      name: "YouTube",
      description: "وارد کردن زیرنویس ویدیوهای YouTube",
      URL: "آدرس ویدیو YouTube",
      URL_explained_start: "آدرس کامل ویدیو YouTube را وارد کنید. برای اطلاعات بیشتر",
      URL_explained_link: "اینجا کلیک کنید",
      URL_explained_end: "درباره فرمت‌های پشتیبانی شده",
      task_explained: null,
      language: "زبان زیرنویس",
      language_explained: "زبان زیرنویس ویدیو را انتخاب کنید",
      loading_languages: "در حال بارگذاری زبان‌ها..."
    },
    "website-depth": {
      name: null,
      description: null,
      URL: null,
      URL_explained: null,
      depth: null,
      depth_explained: null,
      max_pages: null,
      max_pages_explained: null,
      task_explained: null,
    },
    confluence: {
      name: null,
      description: null,
      deployment_type: null,
      deployment_type_explained: null,
      base_url: null,
      base_url_explained: null,
      space_key: null,
      space_key_explained: null,
      username: null,
      username_explained: null,
      auth_type: null,
      auth_type_explained: null,
      auth_type_username: null,
      auth_type_personal: null,
      token: null,
      token_explained_start: null,
      token_explained_link: null,
      token_desc: null,
      pat_token: null,
      pat_token_explained: null,
      task_explained: null,
    },
    manage: {
      documents: "اسناد",
      "data-connectors": "اتصال‌دهنده‌های داده",
      "desktop-only": "فقط دسکتاپ",
      dismiss: "رد کردن",
      editing: "در حال ویرایش",
    },
    directory: {
      "my-documents": "اسناد من",
      "new-folder": "پوشه جدید",
      "search-document": "جستجو در اسناد",
      "no-documents": "هیچ سندی یافت نشد",
      "move-workspace": "انتقال به فضای کاری",
      name: null,
      "delete-confirmation": "تأیید حذف",
      "removing-message": "در حال حذف...",
      "move-success": "با موفقیت منتقل شد",
      date: "تاریخ",
      type: "نوع",
      no_docs: "هیچ سندی موجود نیست",
      select_all: "انتخاب همه",
      deselect_all: "لغو انتخاب همه",
      remove_selected: "حذف موارد انتخابی",
      costs: "هزینه‌ها",
      save_embed: "ذخیره جاسازی",
    },
    upload: {
      "processor-offline": "پردازنده آفلاین",
      "processor-offline-desc": "پردازنده فایل در دسترس نیست",
      "click-upload": "برای آپلود کلیک کنید",
      "file-types": "انواع فایل پشتیبانی شده",
      "or-submit-link": "یا لینک ارسال کنید",
      "placeholder-link": "لینک را اینجا وارد کنید...",
      fetching: "در حال دریافت...",
      "fetch-website": "دریافت وب‌سایت",
      "privacy-notice": "اطلاعیه حریم خصوصی"
    },
    pinning: {
      what_pinning: null,
      pin_explained_block1: null,
      pin_explained_block2: null,
      pin_explained_block3: null,
      accept: null,
    },
    watching: {
      what_watching: null,
      watch_explained_block1: null,
      watch_explained_block2: null,
      watch_explained_block3_start: null,
      watch_explained_block3_link: null,
      watch_explained_block3_end: null,
      accept: null,
    },
    obsidian: {
      name: null,
      description: null,
      vault_location: null,
      vault_description: null,
      selected_files: null,
      importing: null,
      import_vault: null,
      processing_time: null,
      vault_warning: null,
    },
  },
  chat_window: {
    welcome: "خوش آمدید به XehnAI!",
    get_started: "شروع کنید",
    get_started_default: "برای شروع گفتگو، پیامی ارسال کنید...",
    upload: "آپلود فایل",
    or: "یا",
    send_chat: "ارسال گفتگو",
    send_message: "ارسال پیام",
    attach_file: "ضمیمه فایل",
    slash: "دستورات اسلش",
    agents: "دستیارها",
    text_size: "اندازه متن",
    microphone: "میکروفون",
    send: "ارسال",
    attachments_processing: "در حال پردازش ضمائم...",
    tts_speak_message: "خواندن پیام",
    copy: "کپی",
    regenerate: "تولید مجدد",
    regenerate_response: "تولید مجدد پاسخ",
    good_response: "پاسخ خوب",
    more_actions: "عملیات بیشتر",
    hide_citations: "مخفی کردن منابع",
    show_citations: "نمایش منابع",
    pause_tts_speech_message: "مکث خواندن پیام",
    fork: "انشعاب",
    delete: "حذف",
    save_submit: "ذخیره و ارسال",
    cancel: "لغو",
    edit_prompt: "ویرایش پرامپت",
    edit_response: "ویرایش پاسخ",
    at_agent: "در دستیار",
    default_agent_description: "دستیار پیش‌فرض برای این فضای کاری",
    custom_agents_coming_soon: "دستیارهای سفارشی به زودی...",
    slash_reset: "بازنشانی گفتگو",
    preset_reset_description: "بازنشانی گفتگو به حالت اولیه",
    add_new_preset: "افزودن پیش‌تنظیم جدید",
    command: "دستور",
    your_command: "دستور شما",
    placeholder_prompt: "پرامپت خود را وارد کنید...",
    description: null,
    placeholder_description: "توضیح خود را وارد کنید...",
    save: "ذخیره",
    small: "کوچک",
    normal: "عادی",
    large: "بزرگ",
    workspace_llm_manager: {
      search: "جستجو",
      loading_workspace_settings: "در حال بارگذاری تنظیمات فضای کاری...",
      available_models: "مدل‌های موجود",
      available_models_description: "مدل‌های قابل استفاده برای این فضای کاری",
      save: null,
      saving: "در حال ذخیره...",
      missing_credentials: "اعتبارنامه گم شده",
      missing_credentials_description: "اعتبارنامه لازم برای این مدل یافت نشد"
    },
  },
  profile_settings: {
    edit_account: "ویرایش حساب کاربری",
    profile_picture: "تصویر پروفایل",
    remove_profile_picture: "حذف تصویر پروفایل",
    username: "نام کاربری",
    username_description: "نام کاربری شما برای ورود به سیستم",
    new_password: "رمز عبور جدید",
    password_description: "رمز عبور جدید برای حساب کاربری شما",
    cancel: "لغو",
    update_account: "به‌روزرسانی حساب کاربری",
    theme: "تم رنگی",
    language: "زبان",
    failed_upload: "آپلود ناموفق",
    upload_success: "آپلود موفق",
    failed_remove: "حذف ناموفق",
    profile_updated: "پروفایل به‌روزرسانی شد",
    failed_update_user: "به‌روزرسانی کاربر ناموفق",
    account: "حساب کاربری",
    support: "پشتیبانی",
    signout: "خروج",
  },
  customization: {
    interface: {
      title: "رابط کاربری",
      description: "ظاهر و حس رابط کاربری را شخصی‌سازی کنید",
    },
    branding: {
      title: "برندینگ",
      description: "نام و لوگوی برند خود را تنظیم کنید",
    },
    chat: {
      title: "گفتگو",
      description: "تنظیمات مربوط به گفتگو و پیام‌رسانی",
      auto_submit: {
        title: "ارسال خودکار",
        description: "پیام‌ها با فشار Enter ارسال شوند",
      },
      auto_speak: {
        title: "خواندن خودکار",
        description: "پاسخ‌های دستیار به صورت خودکار خوانده شوند"
      },
      spellcheck: {
        title: "غلط‌یاب املایی",
        description: "فعال‌سازی غلط‌یاب املایی در متن پیام‌ها",
      },
    },
    items: {
      theme: {
        title: "تم رنگی",
        description: "انتخاب تم تیره یا روشن برای رابط کاربری",
      },
      "show-scrollbar": {
        title: "نمایش نوار اسکرول",
        description: "نمایش یا مخفی کردن نوار اسکرول در گفتگو",
      },
      "support-email": {
        title: "ایمیل پشتیبانی",
        description: "ایمیل پشتیبانی برای تماس با کاربران",
      },
      "app-name": {
        title: "نام برنامه",
        description: "نام سفارشی برای نمایش در رابط کاربری"
      },
      "chat-message-alignment": {
        title: "ترازبندی پیام‌ها",
        description: "نحوه نمایش پیام‌ها در گفتگو (راست، چپ، وسط)",
      },
      "display-language": {
        title: "زبان نمایش",
        description: "زبان رابط کاربری و متن‌های سیستم"
      },
      logo: {
        title: "لوگوی برنامه",
        description: "لوگوی سفارشی خود را برای نمایش در رابط کاربری آپلود کنید.",
        add: "افزودن لوگو",
        recommended: "فرمت توصیه‌شده: PNG یا SVG — حداقل 256×256 پیکسل",
        remove: "حذف لوگو",
        replace: "جایگزینی لوگو",
      },
      "welcome-messages": {
        title: null,
        description: null,
        new: null,
        system: null,
        user: null,
        message: null,
        assistant: null,
        "double-click": null,
        save: null,
      },
      "browser-appearance": {
        title: null,
        description: null,
        tab: {
          title: null,
          description: null,
        },
        favicon: {
          title: null,
          description: null,
        },
      },
      "sidebar-footer": {
        title: null,
        description: null,
        icon: null,
        link: null,
      },
    },
  },
  "main-page": {
    noWorkspaceError: "لطفاً قبل از شروع گفتگو یک فضای کاری بسازید.",
    checklist: {
      title: "شروع سریع",
      tasksLeft: "کارِ مانده",
      completed: "در مسیر تبدیل شدن به کاربر حرفه‌ای XehnAI هستید!",
      dismiss: "بستن",
      tasks: {
        create_workspace: {
          title: "ساخت فضای کاری",
          description: "اولین فضای کاری خود را بسازید",
          action: "بساز",
        },
        send_chat: {
          title: "ارسال گفتگو",
          description: "یک گفتگو با دستیار هوشمند خود شروع کنید",
          action: "گفتگو",
        },
        embed_document: {
          title: "جاسازی سند",
          description: "اولین سند خود را به فضای کاری اضافه کنید",
          action: "جاسازی",
        },
        setup_system_prompt: {
          title: "تنظیم پیش‌متن سیستم",
          description: "رفتار دستیار هوش مصنوعی را پیکربندی کنید",
          action: "تنظیم",
        },
        define_slash_command: {
          title: "تعریف دستور اسلش",
          description: "دستورهای سفارشی برای دستیار بسازید",
          action: "ایجاد",
        },
        visit_community: {
          title: "بازدید از مرکز جامعه",
          description: "منابع و قالب‌های جامعه را مرور کنید",
          action: "مشاهده",
        },
      },
    },
    quickLinks: {
      title: "میانبرها",
      sendChat: "ارسال گفتگو",
      embedDocument: "جاسازی سند",
      createWorkspace: "ساخت فضای کاری",
    },
    exploreMore: {
      title: "کشف قابلیت‌های بیشتر",
      features: {
        customAgents: {
          title: "دستیارهای هوش مصنوعی سفارشی",
          description: "بدون کدنویسی، دستیارهای قدرتمند و خودکارسازی بسازید.",
          primaryAction: "گفتگو با دستیار",
          secondaryAction: "ساخت دستیار"
        },
        slashCommands: {
          title: "دستورهای اسلش",
          description: "با دستورهای سفارشی، پرامپت‌ها را سریع تزریق کنید.",
          primaryAction: "ایجاد دستور اسلش",
          secondaryAction: "مرور در هاب",
        },
        systemPrompts: {
          title: "پیش‌متن‌های سیستم",
          description: "برای شخصی‌سازی پاسخ‌ها، پیش‌متن سیستم را تغییر دهید.",
          primaryAction: "ویرایش پیش‌متن سیستم",
          secondaryAction: "مدیریت متغیرها",
        },
      },
    },
    announcements: {
      title: "به‌روزرسانی‌ها و اعلان‌ها",
    },
    resources: {
      title: "منابع",
      links: {
        docs: "مستندات",
        star: "ستاره در گیت‌هاب",
      },
      keyboardShortcuts: "میانبرهای صفحه‌کلید",
    },
  },
  "keyboard-shortcuts": {
    title: "میانبرهای صفحه‌کلید",
    shortcuts: {
      settings: "باز کردن تنظیمات",
      workspaceSettings: "تنظیمات فضای کاری جاری",
      home: "رفتن به خانه",
      workspaces: "مدیریت فضاهای کاری",
      apiKeys: "تنظیمات کلیدهای API",
      llmPreferences: "ترجیحات LLM",
      chatSettings: "تنظیمات گفتگو",
      help: "نمایش راهنمای میانبرها",
      showLLMSelector: "نمایش انتخابگر LLM فضای کاری",
    },
  },
  community_hub: {
    publish: {
      system_prompt: {
        success_title: null,
        success_description: null,
        success_thank_you: null,
        view_on_hub: null,
        modal_title: null,
        name_label: null,
        name_description: null,
        name_placeholder: null,
        description_label: null,
        description_description: null,
        tags_label: null,
        tags_description: null,
        tags_placeholder: null,
        visibility_label: null,
        public_description: null,
        private_description: null,
        publish_button: null,
        submitting: null,
        submit: null,
        prompt_label: null,
        prompt_description: null,
        prompt_placeholder: null,
      },
      agent_flow: {
        public_description: null,
        private_description: null,
        success_title: null,
        success_description: null,
        success_thank_you: null,
        view_on_hub: null,
        modal_title: null,
        name_label: null,
        name_description: null,
        name_placeholder: null,
        description_label: null,
        description_description: null,
        tags_label: null,
        tags_description: null,
        tags_placeholder: null,
        visibility_label: null,
        publish_button: null,
        submitting: null,
        submit: null,
        privacy_note: null,
      },
      generic: {
        unauthenticated: {
          title: null,
          description: null,
          button: null,
        },
      },
      slash_command: {
        success_title: null,
        success_description: null,
        success_thank_you: null,
        view_on_hub: null,
        modal_title: null,
        name_label: null,
        name_description: null,
        name_placeholder: null,
        description_label: null,
        description_description: null,
        command_label: null,
        command_description: null,
        command_placeholder: null,
        tags_label: null,
        tags_description: null,
        tags_placeholder: null,
        visibility_label: null,
        public_description: null,
        private_description: null,
        publish_button: null,
        submitting: null,
        prompt_label: null,
        prompt_description: null,
        prompt_placeholder: null,
      },
    },
  },
  security: {
    title: "امنیت",
    multiuser: {
      title: "حالت چند کاربره",
      description:
        "نمونه خود را برای پشتیبانی از تیم خود با فعال‌سازی حالت چند کاربره تنظیم کنید.",
      enable: {
        "is-enable": "حالت چند کاربره فعال است",
        enable: "فعال‌سازی حالت چند کاربره",
        description:
          "به طور پیش‌فرض، شما تنها مدیر خواهید بود. به عنوان مدیر، باید برای تمام کاربران یا مدیران جدید حساب کاربری ایجاد کنید. رمز عبور خود را گم نکنید زیرا فقط یک کاربر مدیر می‌تواند رمزهای عبور را بازنشانی کند.",
        username: "نام کاربری حساب مدیر",
        password: "رمز عبور حساب مدیر",
      },
    },
    password: {
      title: "حفاظت با رمز عبور",
      description:
        "از نمونه XehnAI خود با رمز عبور محافظت کنید. اگر این رمز را فراموش کنید هیچ روش بازیابی وجود ندارد، پس حتماً این رمز عبور را ذخیره کنید.",
      "password-label": "رمز عبور نمونه",
    },
  },
};

export default TRANSLATIONS;
