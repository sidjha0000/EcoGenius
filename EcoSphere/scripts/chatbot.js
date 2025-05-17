async function sendMessage(option = null) {
    let userInput = option || document.getElementById("userInput").value;
    let chatbox = document.getElementById("chatbox");

    if (userInput.trim() === "") return;

    let userMessage = document.createElement("div");
    userMessage.className = "user-message";
    userMessage.innerText = userInput;
    chatbox.appendChild(userMessage);

    document.getElementById("userInput").value = "";

    try {
        let botResponse = await getBotResponse(userInput);

        let botMessage = document.createElement("div");
        botMessage.className = "bot-message";
        botMessage.innerText = botResponse.message;
        chatbox.appendChild(botMessage);

        if (botResponse.options.length > 0) {
            let optionsContainer = document.createElement("div");
            optionsContainer.className = "options-container";

            botResponse.options.forEach(optionText => {
                let optionButton = document.createElement("button");
                optionButton.className = "option-button";
                optionButton.innerText = optionText;
                optionButton.onclick = () => sendMessage(optionText);
                optionsContainer.appendChild(optionButton);
            });

            chatbox.appendChild(optionsContainer);
        }

        chatbox.scrollTop = chatbox.scrollHeight;
    } catch (error) {
        console.error("Error fetching response:", error);
        let errorMessage = document.createElement("div");
        errorMessage.className = "bot-message";
        errorMessage.innerText = "Error: Unable to fetch response. Try again later.";
        chatbox.appendChild(errorMessage);
    }
}

async function getBotResponse(userInput) {
    const responses = {
        "hello": { 
            message: "Hi there! 🌎 I'm EcoGenius. How can I assist you with sustainable living today?", 
            options: ["Recycling Tips", "Sustainable Living", "Eco-friendly Products"] 
        },

        "recycling tips": { 
            message: "♻️ Recycling helps reduce waste and conserve natural resources. Here are some tips:\n\n" +
                     "1️⃣ Separate waste into categories: plastic, paper, metal, and glass.\n" +
                     "2️⃣ Rinse containers before recycling to prevent contamination.\n" +
                     "3️⃣ Avoid recycling items with food residue (e.g., greasy pizza boxes).\n" +
                     "4️⃣ Try upcycling—turn old items into something useful!\n",
            options: ["More Recycling Tips", "Composting"] 
        },

        "more recycling tips": { 
            message: "🔄 More recycling hacks for a greener planet:\n\n" +
                     "✅ Use cloth bags instead of plastic ones.\n" +
                     "✅ Donate old clothes instead of throwing them away.\n" +
                     "✅ Buy products made from recycled materials.\n" +
                     "✅ Try e-waste recycling for old gadgets.\n",
            options: ["Composting", "Zero Waste Lifestyle"] 
        },

        "composting": { 
            message: "🌱 Composting is a great way to reduce food waste! Here's how:\n\n" +
                     "🥦 Collect fruit & veggie scraps, coffee grounds, and eggshells.\n" +
                     "🍂 Avoid composting meat, dairy, and oily food.\n" +
                     "🔄 Turn the compost pile weekly for faster breakdown.\n" +
                     "🌾 Use compost for healthier plants and soil!\n",
            options: ["How to Start Composting?", "Benefits of Composting"] 
        },

        "how to start composting?": { 
            message: "🛠️ To start composting, follow these easy steps:\n\n" +
                     "1️⃣ Get a compost bin or designate a compost pile in your backyard.\n" +
                     "2️⃣ Add green materials (fruit peels, grass clippings) for nitrogen.\n" +
                     "3️⃣ Add brown materials (dry leaves, paper, cardboard) for carbon.\n" +
                     "4️⃣ Keep it moist and turn the pile every few weeks.\n" +
                     "5️⃣ In 2-3 months, you'll have nutrient-rich compost for plants! 🌿",
            options: ["Benefits of Composting", "Sustainable Living"] 
        },

        "sustainable living": { 
            message: "🏡 Sustainable living means making choices that are good for the planet. Here’s how:\n\n" +
                     "🌍 Reduce energy use – turn off lights when not needed.\n" +
                     "💧 Conserve water – fix leaks & use low-flow appliances.\n" +
                     "🛍️ Buy local & organic products to reduce carbon footprint.\n" +
                     "🌱 Grow your own food – even small herb gardens help!\n",
            options: ["Eco-friendly Home", "Minimalist Lifestyle"] 
        },

        "eco-friendly home": { 
            message: "🏠 Make your home eco-friendly with these tips:\n\n" +
                     "1️⃣ Use LED bulbs – they last longer & save energy.\n" +
                     "2️⃣ Install solar panels for renewable energy.\n" +
                     "3️⃣ Reduce single-use plastics at home.\n" +
                     "4️⃣ Use natural cleaners instead of chemical ones.\n",
            options: ["Minimalist Lifestyle", "Zero Waste Lifestyle"] 
        },

        "minimalist lifestyle": { 
            message: "🔄 A minimalist lifestyle means living with less and focusing on what truly matters. Here's how:\n\n" +
                     "📦 Declutter – donate things you don’t use.\n" +
                     "🚫 Buy only what you really need.\n" +
                     "🌿 Choose quality over quantity to reduce waste.\n" +
                     "♻️ Opt for reusable items instead of disposable ones.\n",
            options: ["Zero Waste Lifestyle", "Eco-friendly Products"] 
        },

        "zero waste lifestyle": { 
            message: "🌍 A zero-waste lifestyle reduces waste to an absolute minimum. Try these habits:\n\n" +
                     "🔄 Carry a reusable water bottle & coffee cup.\n" +
                     "🛍️ Bring cloth bags when shopping.\n" +
                     "📦 Buy in bulk to avoid excess packaging.\n" +
                     "♻️ Repair instead of throwing things away.\n",
            options: ["Eco-friendly Products", "More Recycling Tips"] 
        },

        "eco-friendly products": { 
            message: "🌱 Eco-friendly products help reduce environmental impact! Consider these:\n\n" +
                     "✅ Bamboo toothbrushes & biodegradable floss.\n" +
                     "✅ Cloth bags, metal straws, and reusable water bottles.\n" +
                     "✅ Solar-powered chargers and LED light bulbs.\n" +
                     "✅ Organic skincare & chemical-free cleaning products.\n",
            options: ["Where to Buy?", "More Product Ideas"] 
        },

        "where to buy?": { 
            message: "🛒 You can buy eco-friendly products from these sources:\n\n" +
                     "1️⃣ Local organic markets 🌾\n" +
                     "2️⃣ Zero-waste stores 🏪\n" +
                     "3️⃣ Online eco-friendly retailers 🌍\n" +
                     "4️⃣ Sustainable brands like Patagonia & EarthHero.\n",
            options: ["More Product Ideas", "Minimalist Lifestyle"] 
        },
    };

    let lowerInput = userInput.toLowerCase();
    return responses[lowerInput] || { 
        message: "🌱 Welcome to EcoGenius ! Ask me anything about sustainability. 🌍", 
        options: ["Recycling Tips", "Sustainable Living", "Eco-friendly Products"] 
    };
}
