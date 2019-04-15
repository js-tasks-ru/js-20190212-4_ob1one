(function () {

    class Tooltip {

        /**
         * Имя компонента
         * @property {string}
         */
        get name() {
            return 'tooltip';
        }

        /**
         * Обязательный отступ
         */
        get indent() {
            return 5;
        }

        constructor() {
            /**
             * Данное свойство содержит ссылку на
             * елемент содержащий подсказку
             * @type {HTMLDivElement}
             */
            this.el = document.createElement('div');
            this.el.style.position = 'absolute';
            this.root;
            this.onMouseOver = this.onMouseOver.bind(this);
            this.onMouseOut = this.onMouseOut.bind(this);

            this.el.classList.add(this.name);
            document.body.appendChild(this.el);
        }

        /**
         * Метод подключает включает работу подсказок
         * на элементе
         *
         * @param {Element} root - элемент, внутри которого, нужно включить работу подсказок
         */
        attach(root) {
            this.root = root;
            
            this.root.addEventListener('mouseover', this.onMouseOver);
            this.root.addEventListener('mouseout', this.onMouseOut);
        }

        onMouseOver({ target }) {
            if (target.hasAttribute('data-tooltip')) {
                const targetGeometry = target.getBoundingClientRect();
                const tooltipText = target.getAttribute('data-tooltip');

                this.showTooltip(targetGeometry, tooltipText);
            }
        }

        onMouseOut({ target }) {
            if (target.hasAttribute('data-tooltip')) this.el.classList.remove('tooltip_active');
        }

        showTooltip(values, text) {
            this.el.innerHTML = text;
            this.el.classList.add('tooltip_active');
            
            const {left, bottom, height} = values;
            const tooltipHeight = this.el.offsetHeight;

            Object.assign(this.el.style, {
                top: this.sideYObserver(bottom, height, tooltipHeight) + 'px',
                left
            });
        }

        sideYObserver(bottom, height, tooltipHeight) {
            const clientHeight = document.documentElement.clientHeight;
            return bottom >= clientHeight ? bottom - height - tooltipHeight - this.indent : bottom + this.indent;
        }

        /**
         * Удаляет все обработчики событий
         */
        detach() {
            this.root.removeEventListener('mouseover', this.onMouseOver);
            this.root.removeEventListener('mouseout', this.onMouseOut);
        }
    }

    window.Tooltip = Tooltip;
})();