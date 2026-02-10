// 🚀 ULTIMATE MIND MAP - Best in the World
// Features: Interactive nodes, animations, search, edit mode, multiple layouts, export options

class UltimateMindMap {
    constructor(canvasId, containerId) {
        this.canvas = document.getElementById(canvasId);
        this.container = document.getElementById(containerId);
        this.ctx = this.canvas.getContext('2d');
        
        // State
        this.data = null;
        this.nodes = [];
        this.connections = [];
        this.selectedNode = null;
        this.hoveredNode = null;
        this.searchTerm = '';
        
        // View state
        this.scale = 1;
        this.offsetX = 0;
        this.offsetY = 0;
        this.isDragging = false;
        this.dragStart = { x: 0, y: 0 };
        
        // Animation
        this.animationProgress = 0;
        this.isAnimating = false;
        
        // Layout mode
        this.layoutMode = 'radial'; // radial, tree, force, organic
        
        // Colors
        this.colors = {
            center: '#d