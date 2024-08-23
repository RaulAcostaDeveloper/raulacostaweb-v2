'use client'
import { useEffect } from "react";
let pop = typeof window !== 'undefined' ? new Audio('/sounds/pop.mp3') : undefined;
export const GlobalFooter = () => {
    const reproducirPop = () => {
        // @ts-ignore
        // Puede ser undefined
        pop.play();
    }
    useEffect(() => {
        const canvas = document.getElementById('CanvasArcoiris') as HTMLCanvasElement;
        let context = canvas.getContext("2d");
        class Star {
            x: number;
            y: number;
            vx: number;
            vy: number;
            color: string;
            a: number;
            constructor(x: number, y: number) {
                this.x = x;
                this.y = y;
                this.vx = (Math.random() - 0.5) * 3;
                this.vy = (Math.random() - 0.5) * 3;
                this.color = `rgb(${this.random(0, 256)},${this.random(0, 256)},${this.random(0, 256)})`;
                this.a = 1;
                this.draw();
            }
            draw() {
                if (context) {
                    context.beginPath();
                    context.fillStyle = this.color;
                    context.globalCompositeOperation = 'lighter';
                    context.globalAlpha = this.a;
                    context.arc(this.x, this.y, 30, 0, Math.PI * 2, false);
                    context.fill();
                    this.update();
                }
            }
            update() {
                this.x += this.vx;
                this.y += this.vy;
                this.a *= 0.98;
            }
            private random(min: number, max: number): number {
                return Math.floor((max - min) * Math.random() + min);
            }
        }
        const starlist: Star[] = [];
        function init() {
            if (canvas) {
                canvas.width = window.innerWidth - 17;
                canvas.height = window.innerHeight - 250;
            }
        }
        init();
        window.onresize = init;
        if (canvas) {
            canvas.addEventListener('mousemove', function (e) {
                starlist.push(new Star(e.offsetX, e.offsetY));
            });
        }
        function render() {
            if (context) {
                context.clearRect(0, 0, canvas.width, canvas.height);
                starlist.forEach((item, i) => {
                    item.draw();
                    if (item.a < 0.05) {
                        starlist.splice(i, 1);
                    }
                });
                requestAnimationFrame(render);
            }
        }
        render();
    }, []);
    return (
        <div className="globalFooterStyle">
            <div className="tituloCanvasArcoiris" title="Hover me">
            </div>
            <div className="CanvasArcoiris" onPointerMove={() => reproducirPop()} onClick={() => reproducirPop()} title="Hover me">
                <canvas id="CanvasArcoiris" ></canvas>
            </div>
        </div>
    )
}