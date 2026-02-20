// ===== GLOBAL SEARCH FUNCTIONALITY =====
// Add this to EVERY page before closing </body>

(function() {
    // ===== SEARCH DATABASE =====
    const searchDatabase = {
        products: [
            { id: 1, name: "Montessori Wooden Blocks", category: "toys", description: "Natural wood building blocks for fine motor skills", tags: ["blocks", "wooden", "building", "motor skills"], url: "index.html#products", price: 34.99 },
            { id: 2, name: "Sensory Play Mat", category: "toys", description: "Interactive play mat with textures and sounds", tags: ["sensory", "play mat", "tummy time"], url: "index.html#products", price: 49.99 },
            { id: 3, name: "Shape Sorting Cube", category: "toys", description: "Classic shape sorter with 12 colorful blocks", tags: ["shapes", "sorting", "colors"], url: "index.html#products", price: 24.99 },
            { id: 4, name: "Infant Tylenol", category: "medicine", description: "Fever reducer for infants 2+ years", tags: ["medicine", "fever", "pain relief"], url: "index.html#products", price: 12.99 },
            { id: 5, name: "Baby Gas Relief Drops", category: "medicine", description: "Fast-acting gas relief for infants", tags: ["gas", "colic", "relief"], url: "index.html#products", price: 8.99 },
            { id: 6, name: "Nasal Aspirator Kit", category: "medicine", description: "Electric nasal aspirator with silicone tips", tags: ["nasal", "suction", "cold"], url: "index.html#products", price: 19.99 },
            { id: 7, name: "Goodnight Moon Board Book", category: "books", description: "Classic bedtime story", tags: ["book", "bedtime", "story"], url: "index.html#products", price: 9.99 },
            { id: 8, name: "First 100 Words", category: "books", description: "Bilingual picture book", tags: ["words", "bilingual", "vocabulary"], url: "index.html#products", price: 12.99 },
            { id: 9, name: "Touch and Feel Farm Animals", category: "books", description: "Interactive sensory book", tags: ["touch", "feel", "animals", "sensory"], url: "index.html#products", price: 11.99 },
            { id: 10, name: "Organic Cotton Romper", category: "clothes", description: "100% organic cotton romper", tags: ["clothes", "romper", "organic", "baby"], url: "index.html#products", price: 24.99 },
            { id: 11, name: "Pajama Set - 2-Pack", category: "clothes", description: "Cozy footed pajamas", tags: ["pajamas", "sleep", "cozy"], url: "index.html#products", price: 32.99 },
            { id: 12, name: "Baby Beanie & Mittens Set", category: "clothes", description: "Soft knit hat and mittens", tags: ["hat", "mittens", "winter", "baby"], url: "index.html#products", price: 16.99 },
            { id: 13, name: "Soft Sole Crib Shoes", category: "shoes", description: "Flexible leather shoes for pre-walkers", tags: ["shoes", "crib", "pre-walker", "leather"], url: "index.html#products", price: 22.99 },
            { id: 14, name: "First Walker Sneakers", category: "shoes", description: "Lightweight sneakers for first steps", tags: ["sneakers", "walker", "first steps"], url: "index.html#products", price: 34.99 },
            { id: 15, name: "Rain Boots", category: "shoes", description: "Colorful waterproof rain boots", tags: ["boots", "rain", "waterproof"], url: "index.html#products", price: 27.99 },
            { id: 16, name: "Organic Baby Massage Oil", category: "oils", description: "100% organic jojoba and chamomile oil", tags: ["oil", "massage", "organic"], url: "index.html#products", price: 18.99 },
            { id: 17, name: "Diaper Rash Cream", category: "oils", description: "Zinc oxide cream with shea butter", tags: ["diaper", "rash", "cream"], url: "index.html#products", price: 14.99 },
            { id: 18, name: "Baby Lotion - Sensitive Skin", category: "oils", description: "Daily moisturizer for eczema-prone skin", tags: ["lotion", "sensitive", "eczema"], url: "index.html#products", price: 12.99 }
        ],
        
        resources: [
            { id: 101, title: "0-12 Months: Sensory Development", category: "guide", description: "Complete guide to visual tracking, reaching, and sensory exploration.", tags: ["sensory", "development", "infant"], url: "resources.html#development-guides" },
            { id: 102, title: "1-3 Years: Language Milestones", category: "guide", description: "Speech development, first words, and communication tips.", tags: ["language", "speech", "toddler"], url: "resources.html#development-guides" },
            { id: 103, title: "3-5 Years: Pre-K Readiness", category: "guide", description: "Getting ready for school: cognitive and social skills.", tags: ["pre-k", "school", "readiness"], url: "resources.html#development-guides" },
            { id: 104, title: "Sleep Training Tips", category: "expert", description: "Dr. Sarah Kimani shares sleep training tips for newborns.", tags: ["sleep", "training", "newborn", "expert"], url: "resources.html#expert-advice" },
            { id: 105, title: "Understanding Tantrums", category: "expert", description: "Dr. James Mwangi on emotional regulation.", tags: ["tantrums", "behavior", "emotions"], url: "resources.html#expert-advice" },
            { id: 106, title: "Introducing Solid Foods", category: "expert", description: "Dr. Mary Wanjiku on nutrition and first foods.", tags: ["food", "nutrition", "solids", "weaning"], url: "resources.html#expert-advice" },
            { id: 107, title: "Homemade Playdough Recipe", category: "activity", description: "Easy no-cook sensory play recipe.", tags: ["playdough", "sensory", "activity", "diy"], url: "resources.html#learning-activities" },
            { id: 108, title: "Bead Threading Activity", category: "activity", description: "Fine motor skill development.", tags: ["beads", "threading", "fine motor"], url: "resources.html#learning-activities" },
            { id: 109, title: "Nature Scavenger Hunt", category: "activity", description: "Printable outdoor exploration activity.", tags: ["nature", "outdoor", "scavenger", "hunt"], url: "resources.html#learning-activities" },
            { id: 110, title: "Safety Standards Guide", category: "safety", description: "Understanding EN71, ASTM, and CE certifications.", tags: ["safety", "standards", "certification"], url: "resources.html#product-safety" }
        ],
        
        experts: [
            { id: 201, name: "Gertrude's Children's Hospital", type: "hospital", description: "Kenya's most dedicated children's hospital", tags: ["hospital", "pediatric", "emergency"], url: "home.html#experts" },
            { id: 202, name: "Aga Khan University Hospital", type: "hospital", description: "Strong Children's Ward and specialist clinics", tags: ["hospital", "university", "specialist"], url: "home.html#experts" },
            { id: 203, name: "MP Shah Hospital", type: "hospital", description: "Children's Hospital with multiple specialties", tags: ["hospital", "neonatology", "surgery"], url: "home.html#experts" },
            { id: 204, name: "Dr. Imran Khares", type: "doctor", description: "Pediatrician at Honeybee Children's Clinic", tags: ["doctor", "pediatrician", "asthma", "allergy"], url: "home.html#experts" },
            { id: 205, name: "Dr. Yvonne M. Kariuki", type: "doctor", description: "General Pediatrics & Neonatology", tags: ["doctor", "neonatology", "newborn"], url: "home.html#experts" },
            { id: 206, name: "Dr. Henry M. Nderitu", type: "doctor", description: "Pediatric Neurology", tags: ["doctor", "neurology", "brain"], url: "home.html#experts" },
            { id: 207, name: "Dr. Susan Wamithi", type: "doctor", description: "Developmental Pediatrics", tags: ["doctor", "development", "autism"], url: "home.html#experts" }
        ],
        
        pages: [
            { id: 301, title: "Home", description: "Main landing page", url: "home.html" },
            { id: 302, title: "Family Hub", description: "Child profiles and milestone tracking", url: "family-hub.html" },
            { id: 303, title: "Admin Dashboard", description: "Site management", url: "admin-dashboard.html" },
            { id: 304, title: "Shopping Cart", description: "Your selected items", url: "cart.html" },
            { id: 305, title: "Resources", description: "Guides and expert advice", url: "resources.html" },
            { id: 306, title: "Login / Sign Up", description: "Account access", url: "index.html" }
        ]
    };

    // ===== SEARCH STATE =====
    let searchModal = null;
    let searchInput = null;
    let searchResults = null;
    let recentSearches = JSON.parse(localStorage.getItem('recentSearches')) || [];

    // ===== CREATE SEARCH MODAL =====
    function createSearchModal() {
        // Create modal element
        searchModal = document.createElement('div');
        searchModal.id = 'globalSearchModal';
        searchModal.className = 'search-modal';
        searchModal.innerHTML = `
            <div class="search-modal-content">
                <div class="search-modal-header">
                    <h3><i class="fas fa-search"></i> Search LittleExplorers</h3>
                    <button class="search-close" onclick="closeSearch()">&times;</button>
                </div>
                <div class="search-input-container">
                    <i class="fas fa-search search-input-icon"></i>
                    <input type="text" id="globalSearchInput" class="search-input" placeholder="Search products, guides, experts..." autocomplete="off">
                    <button class="search-clear" id="searchClearBtn" onclick="clearSearchInput()" style="display: none;">
                        <i class="fas fa-times-circle"></i>
                    </button>
                </div>
                
                <!-- Recent Searches -->
                <div id="recentSearchesContainer" class="recent-searches" style="display: none;">
                    <div class="recent-header">
                        <span>Recent Searches</span>
                        <button onclick="clearRecentSearches()" class="clear-recent">Clear</button>
                    </div>
                    <div id="recentSearchesList" class="recent-list"></div>
                </div>
                
                <!-- Search Results -->
                <div id="searchResultsContainer" class="search-results-container" style="display: none;">
                    <div class="results-tabs">
                        <button class="results-tab active" data-category="all" onclick="filterResults('all')">All</button>
                        <button class="results-tab" data-category="products" onclick="filterResults('products')">Products</button>
                        <button class="results-tab" data-category="resources" onclick="filterResults('resources')">Resources</button>
                        <button class="results-tab" data-category="experts" onclick="filterResults('experts')">Experts</button>
                        <button class="results-tab" data-category="pages" onclick="filterResults('pages')">Pages</button>
                    </div>
                    <div id="searchResults" class="search-results"></div>
                </div>
                
                <!-- No Results -->
                <div id="noResultsContainer" class="no-results" style="display: none;">
                    <i class="fas fa-search"></i>
                    <h4>No results found</h4>
                    <p>Try different keywords or browse our categories</p>
                </div>
                
                <!-- Search Tips -->
                <div id="searchTips" class="search-tips">
                    <p><i class="fas fa-lightbulb"></i> Search tips: Try "blocks", "doctor", "sleep", "sensory"</p>
                </div>
            </div>
        `;
        
        document.body.appendChild(searchModal);
        
        // Add styles
        addSearchStyles();
        
        // Get elements
        searchInput = document.getElementById('globalSearchInput');
        searchResults = document.getElementById('searchResults');
        
        // Add event listeners
        searchInput.addEventListener('input', handleSearchInput);
        searchInput.addEventListener('keydown', handleSearchKeydown);
        
        // Close on outside click
        searchModal.addEventListener('click', function(e) {
            if (e.target === searchModal) {
                closeSearch();
            }
        });
        
        // Handle clear button
        const clearBtn = document.getElementById('searchClearBtn');
        if (clearBtn) {
            clearBtn.addEventListener('click', clearSearchInput);
        }
    }

    // ===== ADD SEARCH STYLES =====
    function addSearchStyles() {
        const styles = document.createElement('style');
        styles.textContent = `
            /* Search Modal */
            .search-modal {
                display: none;
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0, 0, 0, 0.7);
                z-index: 10000;
                justify-content: center;
                align-items: flex-start;
                padding-top: 100px;
                animation: fadeIn 0.2s ease;
            }
            
            .search-modal.active {
                display: flex;
            }
            
            @keyframes fadeIn {
                from { opacity: 0; }
                to { opacity: 1; }
            }
            
            .search-modal-content {
                background: var(--bg-secondary);
                border-radius: 30px;
                width: 90%;
                max-width: 600px;
                max-height: 80vh;
                overflow: hidden;
                box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
                animation: slideDown 0.3s ease;
            }
            
            @keyframes slideDown {
                from {
                    opacity: 0;
                    transform: translateY(-50px);
                }
                to {
                    opacity: 1;
                    transform: translateY(0);
                }
            }
            
            .search-modal-header {
                background: linear-gradient(135deg, var(--primary), var(--blue));
                color: white;
                padding: 20px;
                display: flex;
                justify-content: space-between;
                align-items: center;
            }
            
            .search-modal-header h3 {
                font-size: 20px;
                display: flex;
                align-items: center;
                gap: 10px;
                margin: 0;
            }
            
            .search-close {
                background: none;
                border: none;
                color: white;
                font-size: 28px;
                cursor: pointer;
                opacity: 0.8;
                transition: opacity 0.2s;
            }
            
            .search-close:hover {
                opacity: 1;
            }
            
            .search-input-container {
                padding: 20px;
                position: relative;
                border-bottom: 1px solid var(--border-color);
            }
            
            .search-input-icon {
                position: absolute;
                left: 35px;
                top: 50%;
                transform: translateY(-50%);
                color: var(--text);
                opacity: 0.5;
                font-size: 18px;
            }
            
            .search-input {
                width: 100%;
                padding: 15px 20px 15px 50px;
                border: 2px solid var(--border-color);
                border-radius: 50px;
                font-size: 16px;
                font-family: 'Quicksand', sans-serif;
                background: var(--input-bg);
                color: var(--text);
                transition: border-color 0.3s;
            }
            
            .search-input:focus {
                border-color: var(--primary);
                outline: none;
            }
            
            .search-clear {
                position: absolute;
                right: 35px;
                top: 50%;
                transform: translateY(-50%);
                background: none;
                border: none;
                color: var(--text);
                opacity: 0.5;
                cursor: pointer;
                font-size: 18px;
                transition: opacity 0.2s;
            }
            
            .search-clear:hover {
                opacity: 1;
                color: var(--secondary);
            }
            
            /* Recent Searches */
            .recent-searches {
                padding: 15px 20px;
                border-bottom: 1px solid var(--border-color);
            }
            
            .recent-header {
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin-bottom: 10px;
                color: var(--text);
                opacity: 0.7;
                font-size: 14px;
            }
            
            .clear-recent {
                background: none;
                border: none;
                color: var(--primary);
                cursor: pointer;
                font-weight: 600;
                font-size: 13px;
            }
            
            .clear-recent:hover {
                color: var(--secondary);
            }
            
            .recent-list {
                display: flex;
                flex-wrap: wrap;
                gap: 10px;
            }
            
            .recent-item {
                background: var(--hover-bg);
                padding: 8px 16px;
                border-radius: 30px;
                font-size: 14px;
                color: var(--text);
                cursor: pointer;
                transition: all 0.2s;
                display: flex;
                align-items: center;
                gap: 8px;
                border: 1px solid var(--border-color);
            }
            
            .recent-item:hover {
                background: var(--primary);
                color: white;
                border-color: var(--primary);
            }
            
            .recent-item i {
                font-size: 12px;
            }
            
            /* Results Tabs */
            .results-tabs {
                display: flex;
                gap: 5px;
                padding: 15px 20px 0;
                border-bottom: 1px solid var(--border-color);
                overflow-x: auto;
                scrollbar-width: none;
            }
            
            .results-tabs::-webkit-scrollbar {
                display: none;
            }
            
            .results-tab {
                padding: 8px 16px;
                border: none;
                background: none;
                color: var(--text);
                opacity: 0.6;
                font-weight: 600;
                cursor: pointer;
                transition: all 0.2s;
                border-bottom: 3px solid transparent;
                white-space: nowrap;
            }
            
            .results-tab:hover {
                opacity: 1;
            }
            
            .results-tab.active {
                opacity: 1;
                color: var(--primary);
                border-bottom-color: var(--primary);
            }
            
            /* Search Results */
            .search-results-container {
                max-height: 400px;
                overflow-y: auto;
            }
            
            .search-results {
                padding: 20px;
            }
            
            .result-item {
                display: flex;
                align-items: center;
                gap: 15px;
                padding: 15px;
                border-radius: 15px;
                margin-bottom: 10px;
                cursor: pointer;
                transition: all 0.2s;
                border: 1px solid var(--border-color);
                background: var(--card-bg);
            }
            
            .result-item:hover {
                transform: translateX(5px);
                border-color: var(--primary);
                box-shadow: var(--shadow);
            }
            
            .result-icon {
                width: 50px;
                height: 50px;
                background: var(--hover-bg);
                border-radius: 12px;
                display: flex;
                align-items: center;
                justify-content: center;
                color: var(--primary);
                font-size: 24px;
            }
            
            .result-content {
                flex: 1;
            }
            
            .result-title {
                font-weight: 800;
                margin-bottom: 5px;
                color: var(--text);
            }
            
            .result-category {
                font-size: 12px;
                color: var(--text);
                opacity: 0.6;
                display: flex;
                align-items: center;
                gap: 5px;
            }
            
            .result-category i {
                font-size: 12px;
            }
            
            .result-description {
                font-size: 13px;
                color: var(--text);
                opacity: 0.7;
                margin-top: 5px;
            }
            
            .result-price {
                font-weight: 800;
                color: var(--secondary);
                font-size: 16px;
            }
            
            /* No Results */
            .no-results {
                text-align: center;
                padding: 50px 20px;
                color: var(--text);
            }
            
            .no-results i {
                font-size: 60px;
                opacity: 0.2;
                margin-bottom: 20px;
            }
            
            .no-results h4 {
                font-size: 20px;
                margin-bottom: 10px;
            }
            
            .no-results p {
                opacity: 0.6;
            }
            
            /* Search Tips */
            .search-tips {
                padding: 15px 20px;
                border-top: 1px solid var(--border-color);
                color: var(--text);
                opacity: 0.6;
                font-size: 13px;
                display: flex;
                align-items: center;
                gap: 8px;
            }
            
            .search-tips i {
                color: var(--accent);
            }
            
            /* Category Badges */
            .category-badge {
                display: inline-block;
                padding: 3px 10px;
                border-radius: 20px;
                font-size: 11px;
                font-weight: 600;
            }
            
            .category-badge.products { background: rgba(78,205,196,0.2); color: var(--primary); }
            .category-badge.resources { background: rgba(255,209,102,0.2); color: var(--accent); }
            .category-badge.experts { background: rgba(157,107,255,0.2); color: var(--purple); }
            .category-badge.pages { background: rgba(255,107,107,0.2); color: var(--secondary); }
            
            /* Highlight */
            .search-highlight {
                background: rgba(255,209,102,0.3);
                padding: 2px 0;
                border-radius: 3px;
            }
        `;
        
        document.head.appendChild(styles);
    }

    // ===== OPEN SEARCH =====
    window.openSearch = function() {
        if (!searchModal) {
            createSearchModal();
        }
        searchModal.classList.add('active');
        setTimeout(() => {
            searchInput.focus();
        }, 100);
        
        // Update recent searches display
        updateRecentSearchesDisplay();
    };

    // ===== CLOSE SEARCH =====
    window.closeSearch = function() {
        if (searchModal) {
            searchModal.classList.remove('active');
            searchInput.value = '';
            hideResults();
        }
    };

    // ===== HANDLE SEARCH INPUT =====
    function handleSearchInput() {
        const query = searchInput.value.trim().toLowerCase();
        const clearBtn = document.getElementById('searchClearBtn');
        
        if (query.length > 0) {
            clearBtn.style.display = 'block';
            performSearch(query);
            hideRecentSearches();
        } else {
            clearBtn.style.display = 'none';
            hideResults();
            showRecentSearches();
        }
    }

    // ===== HANDLE SEARCH KEYDOWN =====
    function handleSearchKeydown(e) {
        if (e.key === 'Escape') {
            closeSearch();
        } else if (e.key === 'Enter') {
            const query = searchInput.value.trim();
            if (query) {
                addToRecentSearches(query);
            }
        }
    }

    // ===== PERFORM SEARCH =====
    function performSearch(query) {
        const words = query.split(' ').filter(w => w.length > 1);
        let allResults = [];
        
        // Search products
        searchDatabase.products.forEach(item => {
            const score = calculateRelevance(item, query, words);
            if (score > 0) {
                allResults.push({
                    ...item,
                    type: 'product',
                    category: item.category,
                    score,
                    icon: getProductIcon(item.category)
                });
            }
        });
        
        // Search resources
        searchDatabase.resources.forEach(item => {
            const score = calculateRelevance(item, query, words);
            if (score > 0) {
                allResults.push({
                    ...item,
                    type: 'resource',
                    icon: getResourceIcon(item.category)
                });
            }
        });
        
        // Search experts
        searchDatabase.experts.forEach(item => {
            const score = calculateRelevance(item, query, words);
            if (score > 0) {
                allResults.push({
                    ...item,
                    type: 'expert',
                    icon: item.type === 'hospital' ? 'fa-hospital' : 'fa-user-md'
                });
            }
        });
        
        // Search pages
        searchDatabase.pages.forEach(item => {
            const score = calculateRelevance(item, query, words);
            if (score > 0) {
                allResults.push({
                    ...item,
                    type: 'page',
                    icon: 'fa-file'
                });
            }
        });
        
        // Sort by relevance
        allResults.sort((a, b) => b.score - a.score);
        
        // Display results
        displayResults(allResults);
    }

    // ===== CALCULATE RELEVANCE SCORE =====
    function calculateRelevance(item, query, words) {
        let score = 0;
        const searchableText = `${item.name || item.title || ''} ${item.description || ''} ${item.tags ? item.tags.join(' ') : ''}`.toLowerCase();
        
        // Exact match bonus
        if (searchableText.includes(query)) {
            score += 10;
        }
        
        // Word matches
        words.forEach(word => {
            if (searchableText.includes(word)) {
                score += 5;
            }
        });
        
        // Title/name matches are more important
        const titleText = (item.name || item.title || '').toLowerCase();
        words.forEach(word => {
            if (titleText.includes(word)) {
                score += 3;
            }
        });
        
        return score;
    }

    // ===== DISPLAY RESULTS =====
    function displayResults(results) {
        const container = document.getElementById('searchResultsContainer');
        const resultsDiv = document.getElementById('searchResults');
        const noResults = document.getElementById('noResultsContainer');
        const tips = document.getElementById('searchTips');
        
        if (results.length === 0) {
            container.style.display = 'none';
            noResults.style.display = 'block';
            tips.style.display = 'none';
            return;
        }
        
        container.style.display = 'block';
        noResults.style.display = 'none';
        tips.style.display = 'flex';
        
        let html = '';
        const currentFilter = document.querySelector('.results-tab.active')?.dataset.category || 'all';
        
        const filteredResults = currentFilter === 'all' 
            ? results 
            : results.filter(r => r.type === currentFilter.slice(0, -1)); // Remove 's' from plural
        
        filteredResults.slice(0, 10).forEach(result => {
            html += createResultItem(result);
        });
        
        if (filteredResults.length === 0) {
            html = `<div class="no-results-small">No ${currentFilter} found</div>`;
        }
        
        resultsDiv.innerHTML = html;
    }

    // ===== CREATE RESULT ITEM HTML =====
    function createResultItem(result) {
        const icon = result.icon || 'fa-tag';
        const title = result.name || result.title;
        const category = result.type;
        const description = result.description || '';
        const price = result.price ? `KSh ${Math.round(result.price * 130).toLocaleString()}` : '';
        
        return `
            <div class="result-item" onclick="navigateToResult('${result.url}', '${title}')">
                <div class="result-icon">
                    <i class="fas ${icon}"></i>
                </div>
                <div class="result-content">
                    <div class="result-title">${highlightMatch(title, searchInput.value)}</div>
                    <div class="result-category">
                        <span class="category-badge ${category}">${category}</span>
                        ${result.category ? `<span><i class="fas fa-tag"></i> ${result.category}</span>` : ''}
                    </div>
                    <div class="result-description">${highlightMatch(description, searchInput.value)}</div>
                </div>
                ${price ? `<div class="result-price">${price}</div>` : ''}
            </div>
        `;
    }

    // ===== HIGHLIGHT MATCHES =====
    function highlightMatch(text, query) {
        if (!text || !query) return text;
        const regex = new RegExp(`(${query})`, 'gi');
        return text.replace(regex, '<span class="search-highlight">$1</span>');
    }

    // ===== NAVIGATE TO RESULT =====
    window.navigateToResult = function(url, title) {
        addToRecentSearches(title);
        window.location.href = url;
    };

    // ===== GET PRODUCT ICON =====
    function getProductIcon(category) {
        const icons = {
            toys: 'fa-cube',
            medicine: 'fa-capsules',
            books: 'fa-book',
            clothes: 'fa-shirt',
            shoes: 'fa-shoe-prints',
            oils: 'fa-droplet'
        };
        return icons[category] || 'fa-tag';
    }

    // ===== GET RESOURCE ICON =====
    function getResourceIcon(category) {
        const icons = {
            guide: 'fa-book-open',
            expert: 'fa-star',
            activity: 'fa-puzzle-piece',
            safety: 'fa-shield'
        };
        return icons[category] || 'fa-file';
    }

    // ===== FILTER RESULTS =====
    window.filterResults = function(category) {
        document.querySelectorAll('.results-tab').forEach(tab => {
            tab.classList.remove('active');
        });
        event.target.classList.add('active');
        
        if (searchInput.value.trim()) {
            performSearch(searchInput.value.trim().toLowerCase());
        }
    };

    // ===== CLEAR SEARCH INPUT =====
    window.clearSearchInput = function() {
        searchInput.value = '';
        searchInput.focus();
        document.getElementById('searchClearBtn').style.display = 'none';
        hideResults();
        showRecentSearches();
    };

    // ===== HIDE RESULTS =====
    function hideResults() {
        document.getElementById('searchResultsContainer').style.display = 'none';
        document.getElementById('noResultsContainer').style.display = 'none';
        document.getElementById('searchTips').style.display = 'flex';
    }

    // ===== RECENT SEARCHES FUNCTIONS =====
    function addToRecentSearches(query) {
        if (!query) return;
        
        // Remove if already exists
        recentSearches = recentSearches.filter(s => s.toLowerCase() !== query.toLowerCase());
        
        // Add to beginning
        recentSearches.unshift(query);
        
        // Keep only last 5
        if (recentSearches.length > 5) {
            recentSearches.pop();
        }
        
        localStorage.setItem('recentSearches', JSON.stringify(recentSearches));
        updateRecentSearchesDisplay();
    }

    function updateRecentSearchesDisplay() {
        const container = document.getElementById('recentSearchesContainer');
        const list = document.getElementById('recentSearchesList');
        
        if (recentSearches.length === 0) {
            container.style.display = 'none';
            return;
        }
        
        container.style.display = 'block';
        
        let html = '';
        recentSearches.forEach(search => {
            html += `
                <div class="recent-item" onclick="useRecentSearch('${search}')">
                    <i class="fas fa-history"></i> ${search}
                </div>
            `;
        });
        
        list.innerHTML = html;
    }

    window.useRecentSearch = function(search) {
        searchInput.value = search;
        document.getElementById('searchClearBtn').style.display = 'block';
        performSearch(search.toLowerCase());
        hideRecentSearches();
    };

    window.clearRecentSearches = function() {
        recentSearches = [];
        localStorage.removeItem('recentSearches');
        updateRecentSearchesDisplay();
    };

    function showRecentSearches() {
        if (recentSearches.length > 0) {
            document.getElementById('recentSearchesContainer').style.display = 'block';
        }
    }

    function hideRecentSearches() {
        document.getElementById('recentSearchesContainer').style.display = 'none';
    }

    // ===== KEYBOARD SHORTCUT =====
    document.addEventListener('keydown', function(e) {
        // Ctrl/Cmd + K to open search
        if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
            e.preventDefault();
            openSearch();
        }
        
        // Slash (/) to open search
        if (e.key === '/' && !['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName)) {
            e.preventDefault();
            openSearch();
        }
    });

    // ===== INITIALIZE =====
    document.addEventListener('DOMContentLoaded', function() {
        // Add search button to header if it doesn't exist
        const headerActions = document.querySelector('.header-actions');
        if (headerActions && !document.querySelector('.search-btn')) {
            const searchBtn = document.createElement('a');
            searchBtn.href = '#';
            searchBtn.className = 'search-btn';
            searchBtn.innerHTML = '<i class="fas fa-search"></i>';
            searchBtn.onclick = (e) => {
                e.preventDefault();
                openSearch();
            };
            headerActions.insertBefore(searchBtn, headerActions.firstChild);
        }
    });
})();