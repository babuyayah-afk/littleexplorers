// ===== GLOBAL SETTINGS PANEL =====
// Add this to EVERY page before closing </body>

(function() {
    // ===== SETTINGS STORAGE =====
    const SETTINGS_KEY = 'littleExplorers_globalSettings';
    
    // Default settings
    const defaultSettings = {
        theme: 'light',
        primaryColor: '#4ECDC4',
        secondaryColor: '#FF6B6B',
        accentColor: '#FFD166',
        fontSize: 'medium',
        layoutDensity: 'comfortable',
        region: 'kenya',
        currency: 'KSh',
        animations: true,
        notifications: true,
        compactMode: false
    };
    
    // Load settings from localStorage
    let settings = JSON.parse(localStorage.getItem(SETTINGS_KEY)) || defaultSettings;
    
    // ===== APPLY SETTINGS TO PAGE =====
    function applySettings() {
        // Apply theme
        document.documentElement.setAttribute('data-theme', settings.theme);
        
        // Apply custom colors
        document.documentElement.style.setProperty('--primary', settings.primaryColor);
        document.documentElement.style.setProperty('--secondary', settings.secondaryColor);
        document.documentElement.style.setProperty('--accent', settings.accentColor);
        
        // Apply font size
        document.documentElement.style.setProperty('--font-scale', getFontScale(settings.fontSize));
        
        // Apply layout density
        document.documentElement.style.setProperty('--spacing-scale', getDensityScale(settings.layoutDensity));
        
        // Apply region-specific settings
        if (settings.region === 'kenya') {
            document.documentElement.style.setProperty('--currency-symbol', 'KSh');
            document.documentElement.style.setProperty('--shipping-rate', '150');
        } else {
            document.documentElement.style.setProperty('--currency-symbol', '$');
            document.documentElement.style.setProperty('--shipping-rate', '5');
        }
        
        // Apply animations
        if (!settings.animations) {
            document.documentElement.style.setProperty('--animation-speed', '0s');
        } else {
            document.documentElement.style.removeProperty('--animation-speed');
        }
        
        // Update all currency displays on page
        updateCurrencyDisplays();
    }
    
    // Helper: Get font scale
    function getFontScale(size) {
        const scales = {
            small: '0.875',
            medium: '1',
            large: '1.125',
            'x-large': '1.25'
        };
        return scales[size] || '1';
    }
    
    // Helper: Get density scale
    function getDensityScale(density) {
        const scales = {
            compact: '0.85',
            comfortable: '1',
            cozy: '1.15'
        };
        return scales[density] || '1';
    }
    
    // ===== UPDATE CURRENCY DISPLAYS =====
    function updateCurrencyDisplays() {
        // Find all price elements
        document.querySelectorAll('[data-price], .price, .product-price').forEach(el => {
            if (el.dataset.originalPrice) {
                const price = parseFloat(el.dataset.originalPrice);
                if (settings.currency === 'KSh') {
                    el.textContent = `KSh ${(price * 130).toFixed(0)}`;
                } else {
                    el.textContent = `$${price.toFixed(2)}`;
                }
            }
        });
    }
    
    // ===== CREATE SETTINGS PANEL HTML =====
    function createSettingsPanel() {
        const panel = document.createElement('div');
        panel.id = 'globalSettingsPanel';
        panel.className = 'settings-panel';
        panel.innerHTML = `
            <div class="settings-toggle" onclick="toggleSettingsPanel(event)">
                <i class="fas fa-cog"></i>
            </div>
            
            <div class="settings-content">
                <div class="settings-header">
                    <h3><i class="fas fa-sliders-h"></i> Site Settings</h3>
                    <button onclick="closeSettingsPanel(event)" class="settings-close">&times;</button>
                </div>
                
                <div class="settings-body">
                    <!-- Theme Section -->
                    <div class="settings-section">
                        <h4>Appearance</h4>
                        
                        <div class="settings-row">
                            <span>Theme Mode</span>
                            <div class="theme-buttons">
                                <button onclick="updateSetting('theme', 'light')" class="theme-btn ${settings.theme === 'light' ? 'active' : ''}">
                                    <i class="fas fa-sun"></i> Light
                                </button>
                                <button onclick="updateSetting('theme', 'dark')" class="theme-btn ${settings.theme === 'dark' ? 'active' : ''}">
                                    <i class="fas fa-moon"></i> Dark
                                </button>
                            </div>
                        </div>
                        
                        <div class="settings-row">
                            <span>Primary Color</span>
                            <input type="color" id="primaryColorPicker" value="${settings.primaryColor}" onchange="updateSetting('primaryColor', this.value)">
                        </div>
                        
                        <div class="settings-row">
                            <span>Font Size</span>
                            <select onchange="updateSetting('fontSize', this.value)">
                                <option value="small" ${settings.fontSize === 'small' ? 'selected' : ''}>Small</option>
                                <option value="medium" ${settings.fontSize === 'medium' ? 'selected' : ''}>Medium</option>
                                <option value="large" ${settings.fontSize === 'large' ? 'selected' : ''}>Large</option>
                                <option value="x-large" ${settings.fontSize === 'x-large' ? 'selected' : ''}>X-Large</option>
                            </select>
                        </div>
                        
                        <div class="settings-row">
                            <span>Layout Density</span>
                            <select onchange="updateSetting('layoutDensity', this.value)">
                                <option value="compact" ${settings.layoutDensity === 'compact' ? 'selected' : ''}>Compact</option>
                                <option value="comfortable" ${settings.layoutDensity === 'comfortable' ? 'selected' : ''}>Comfortable</option>
                                <option value="cozy" ${settings.layoutDensity === 'cozy' ? 'selected' : ''}>Cozy</option>
                            </select>
                        </div>
                    </div>
                    
                    <!-- Region & Currency -->
                    <div class="settings-section">
                        <h4>Region & Currency</h4>
                        
                        <div class="settings-row">
                            <span>Your Region</span>
                            <select onchange="updateSetting('region', this.value)">
                                <option value="kenya" ${settings.region === 'kenya' ? 'selected' : ''}>🇰🇪 Kenya</option>
                                <option value="international" ${settings.region === 'international' ? 'selected' : ''}>🌍 International</option>
                            </select>
                        </div>
                        
                        <div class="settings-row">
                            <span>Currency</span>
                            <select onchange="updateSetting('currency', this.value)">
                                <option value="KSh" ${settings.currency === 'KSh' ? 'selected' : ''}>KSh - Kenyan Shilling</option>
                                <option value="USD" ${settings.currency === 'USD' ? 'selected' : ''}>$ - US Dollar</option>
                                <option value="EUR" ${settings.currency === 'EUR' ? 'selected' : ''}>€ - Euro</option>
                            </select>
                        </div>
                        
                        <div class="settings-row">
                            <span>Exchange Rate</span>
                            <span class="settings-value">1 USD = 130 KSh</span>
                        </div>
                    </div>
                    
                    <!-- Preferences -->
                    <div class="settings-section">
                        <h4>Preferences</h4>
                        
                        <div class="settings-row">
                            <span>Enable Animations</span>
                            <label class="switch">
                                <input type="checkbox" ${settings.animations ? 'checked' : ''} onchange="updateSetting('animations', this.checked)">
                                <span class="slider"></span>
                            </label>
                        </div>
                        
                        <div class="settings-row">
                            <span>Show Notifications</span>
                            <label class="switch">
                                <input type="checkbox" ${settings.notifications ? 'checked' : ''} onchange="updateSetting('notifications', this.checked)">
                                <span class="slider"></span>
                            </label>
                        </div>
                        
                        <div class="settings-row">
                            <span>Compact Mode</span>
                            <label class="switch">
                                <input type="checkbox" ${settings.compactMode ? 'checked' : ''} onchange="updateSetting('compactMode', this.checked)">
                                <span class="slider"></span>
                            </label>
                        </div>
                    </div>
                    
                    <!-- Mobile Preview -->
                    <div class="settings-section">
                        <h4>Mobile Preview</h4>
                        <button class="preview-btn" onclick="toggleMobilePreview()">
                            <i class="fas fa-mobile-alt"></i> Preview Mobile View
                        </button>
                    </div>
                    
                    <!-- Actions -->
                    <div class="settings-actions">
                        <button class="reset-btn" onclick="resetSettings()">
                            <i class="fas fa-undo"></i> Reset to Default
                        </button>
                        <button class="save-btn" onclick="saveSettings()">
                            <i class="fas fa-save"></i> Save Settings
                        </button>
                    </div>
                </div>
            </div>
        `;
        
        document.body.appendChild(panel);
        
        // Add panel styles
        addPanelStyles();
        
        // ===== CLICK ANYWHERE TO CLOSE =====
        document.addEventListener('click', function(event) {
            const panel = document.getElementById('globalSettingsPanel');
            if (!panel) return;
            
            // If click is outside the settings content AND not on the toggle button
            if (!panel.querySelector('.settings-content').contains(event.target) && 
                !panel.querySelector('.settings-toggle').contains(event.target)) {
                panel.classList.remove('open');
            }
        });
    }
    
    // ===== ADD PANEL STYLES =====
    function addPanelStyles() {
        const styles = document.createElement('style');
        styles.textContent = `
            /* Settings Panel */
            .settings-panel {
                position: fixed;
                bottom: 30px;
                right: 30px;
                z-index: 9999;
                font-family: 'Quicksand', sans-serif;
            }
            
            .settings-toggle {
                width: 60px;
                height: 60px;
                background: linear-gradient(135deg, var(--primary), var(--blue));
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                color: white;
                font-size: 24px;
                cursor: pointer;
                box-shadow: 0 10px 25px rgba(0,0,0,0.2);
                transition: transform 0.3s, box-shadow 0.3s;
                animation: rotate 3s infinite linear;
            }
            
            .settings-toggle:hover {
                transform: scale(1.1) rotate(90deg);
                box-shadow: 0 15px 35px rgba(78,205,196,0.4);
            }
            
            @keyframes rotate {
                0% { transform: rotate(0deg); }
                100% { transform: rotate(360deg); }
            }
            
            .settings-content {
                position: absolute;
                bottom: 80px;
                right: 0;
                width: 380px;
                background: var(--bg-secondary);
                border-radius: 30px;
                box-shadow: 0 20px 40px rgba(0,0,0,0.2);
                border: 2px solid var(--primary);
                display: none;
                overflow: hidden;
                animation: slideUp 0.3s ease;
            }
            
            .settings-panel.open .settings-content {
                display: block;
            }
            
            @keyframes slideUp {
                from {
                    opacity: 0;
                    transform: translateY(20px);
                }
                to {
                    opacity: 1;
                    transform: translateY(0);
                }
            }
            
            .settings-header {
                background: linear-gradient(135deg, var(--primary), var(--blue));
                color: white;
                padding: 20px;
                display: flex;
                justify-content: space-between;
                align-items: center;
            }
            
            .settings-header h3 {
                font-size: 18px;
                display: flex;
                align-items: center;
                gap: 10px;
                margin: 0;
            }
            
            .settings-close {
                background: none;
                border: none;
                color: white;
                font-size: 28px;
                cursor: pointer;
                opacity: 0.8;
                transition: opacity 0.2s;
            }
            
            .settings-close:hover {
                opacity: 1;
            }
            
            .settings-body {
                padding: 20px;
                max-height: 70vh;
                overflow-y: auto;
                background: var(--bg-secondary);
            }
            
            .settings-section {
                margin-bottom: 25px;
                padding-bottom: 20px;
                border-bottom: 1px solid var(--border-color);
            }
            
            .settings-section:last-child {
                border-bottom: none;
            }
            
            .settings-section h4 {
                font-size: 16px;
                color: var(--text);
                margin-bottom: 15px;
                opacity: 0.8;
            }
            
            .settings-row {
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin-bottom: 15px;
                font-size: 14px;
            }
            
            .settings-row span {
                color: var(--text);
            }
            
            .settings-row select,
            .settings-row input[type="color"] {
                padding: 8px 12px;
                border-radius: 20px;
                border: 2px solid var(--border-color);
                background: var(--input-bg);
                color: var(--text);
                font-family: 'Quicksand', sans-serif;
            }
            
            .theme-buttons {
                display: flex;
                gap: 8px;
            }
            
            .theme-btn {
                padding: 6px 12px;
                border-radius: 20px;
                border: 2px solid var(--border-color);
                background: transparent;
                color: var(--text);
                cursor: pointer;
                transition: all 0.2s;
                font-size: 12px;
            }
            
            .theme-btn.active {
                background: var(--primary);
                color: white;
                border-color: var(--primary);
            }
            
            /* Toggle Switch */
            .switch {
                position: relative;
                display: inline-block;
                width: 50px;
                height: 26px;
            }
            
            .switch input {
                opacity: 0;
                width: 0;
                height: 0;
            }
            
            .slider {
                position: absolute;
                cursor: pointer;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background-color: #ccc;
                transition: .4s;
                border-radius: 34px;
            }
            
            .slider:before {
                position: absolute;
                content: "";
                height: 18px;
                width: 18px;
                left: 4px;
                bottom: 4px;
                background-color: white;
                transition: .4s;
                border-radius: 50%;
            }
            
            input:checked + .slider {
                background-color: var(--primary);
            }
            
            input:checked + .slider:before {
                transform: translateX(24px);
            }
            
            .preview-btn {
                width: 100%;
                padding: 12px;
                background: var(--primary);
                color: white;
                border: none;
                border-radius: 30px;
                font-weight: 600;
                cursor: pointer;
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 10px;
                transition: 0.3s;
            }
            
            .preview-btn:hover {
                background: var(--blue);
                transform: translateY(-2px);
            }
            
            .settings-actions {
                display: flex;
                gap: 15px;
                margin-top: 20px;
            }
            
            .reset-btn,
            .save-btn {
                flex: 1;
                padding: 12px;
                border-radius: 30px;
                font-weight: 600;
                cursor: pointer;
                border: none;
                transition: 0.3s;
            }
            
            .reset-btn {
                background: transparent;
                border: 2px solid var(--border-color);
                color: var(--text);
            }
            
            .save-btn {
                background: var(--primary);
                color: white;
            }
            
            .reset-btn:hover {
                border-color: var(--danger);
                color: var(--danger);
            }
            
            .save-btn:hover {
                background: var(--secondary);
                transform: translateY(-2px);
            }
            
            /* Mobile Preview Mode */
            body.mobile-preview {
                max-width: 375px;
                margin: 0 auto !important;
                border: 10px solid #333;
                border-radius: 40px;
                overflow: hidden;
                height: 100vh;
                position: relative;
            }
            
            body.mobile-preview::before {
                content: '';
                position: absolute;
                top: 0;
                left: 50%;
                transform: translateX(-50%);
                width: 150px;
                height: 30px;
                background: #333;
                border-radius: 0 0 20px 20px;
                z-index: 10000;
            }
            
            /* Responsive */
            @media (max-width: 480px) {
                .settings-content {
                    width: 300px;
                    right: 0;
                }
            }
        `;
        
        document.head.appendChild(styles);
    }
    
    // ===== TOGGLE SETTINGS PANEL =====
    window.toggleSettingsPanel = function(event) {
        if (event) {
            event.stopPropagation();
        }
        document.getElementById('globalSettingsPanel').classList.toggle('open');
    };
    
    window.closeSettingsPanel = function(event) {
        if (event) {
            event.stopPropagation();
        }
        document.getElementById('globalSettingsPanel').classList.remove('open');
    };
    
    // ===== UPDATE SETTING =====
    window.updateSetting = function(key, value) {
        settings[key] = value;
        
        // Special handling for certain settings
        if (key === 'theme' || key === 'primaryColor' || key === 'secondaryColor' || 
            key === 'fontSize' || key === 'layoutDensity' || key === 'region' || 
            key === 'animations') {
            applySettings();
        }
        
        // Update toggle button states
        if (key === 'theme') {
            document.querySelectorAll('.theme-btn').forEach(btn => {
                btn.classList.remove('active');
            });
            document.querySelector(`.theme-btn[onclick*="'${value}'"]`)?.classList.add('active');
        }
        
        // Save to localStorage
        localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings));
    };
    
    // ===== RESET SETTINGS =====
    window.resetSettings = function() {
        if (confirm('Reset all settings to default?')) {
            settings = {...defaultSettings};
            localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings));
            applySettings();
            location.reload(); // Refresh to reset all UI
        }
    };
    
    // ===== SAVE SETTINGS =====
    window.saveSettings = function() {
        localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings));
        alert('✅ Settings saved successfully!');
        closeSettingsPanel();
    };
    
    // ===== TOGGLE MOBILE PREVIEW =====
    window.toggleMobilePreview = function() {
        document.body.classList.toggle('mobile-preview');
        
        if (document.body.classList.contains('mobile-preview')) {
            alert('📱 Mobile preview mode enabled. Click again to exit.');
        }
    };
    
    // ===== INITIALIZE =====
    document.addEventListener('DOMContentLoaded', function() {
        createSettingsPanel();
        applySettings();
    });
})();