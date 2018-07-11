import {
    WebGLRenderer,
    PCFSoftShadowMap,
    Scene,
    PerspectiveCamera,
} from 'three';

class Game {
    start(props) {
        global.addEventListener('resize', this.handleResize, false);

        this.setup(props.canvas);
        this.handleResize();

        this.raf = requestAnimationFrame(this.update.bind(this));
    }

    end() {
        global.removeEventListener('resize', this.handleResize, false);
        cancelAnimationFrame(this.raf);
    }

    setup(canvas) {
        this.renderer = new WebGLRenderer({ canvas });
        this.renderer.shadowMap.enabled = true;
        this.renderer.shadowMap.type = PCFSoftShadowMap;
        this.renderer.gammaInput = true;
        this.renderer.gammaOutput = true;

        this.scene = new Scene();

        this.camera = new PerspectiveCamera(70, 1, 1, 1000);

        // this.composer = new EffectComposer(this.renderer);
    }

    handleResize = () => {
        const width = global.innerWidth;
        const height = global.innerHeight;
        const ratio = global.devicePixelRatio;

        this.renderer.setPixelRatio(ratio);
        this.renderer.setSize(width * ratio, height * ratio);
    }

    update = () => {
        this.raf = requestAnimationFrame(this.update.bind(this));

        this.renderer.render(this.scene, this.camera);
    }
}

export default Game;
