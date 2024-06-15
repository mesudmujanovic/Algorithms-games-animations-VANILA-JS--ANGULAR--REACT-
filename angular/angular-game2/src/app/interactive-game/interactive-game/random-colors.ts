export class RandomColors {
    colors: string[] = [ 'red', 'green', 'blue', 'purple', 
    'orange', 'yellow', 'cyan', 'brown', 'magenta'];
    index: number = 0;

    randomColorsIndex() {
        this.index = Math.floor(Math.random() * 10);
        const randomIndex = this.colors[this.index];
        return randomIndex;
    }
}
