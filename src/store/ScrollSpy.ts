import {defineStore} from "pinia";

export const useScrollspy = defineStore('scroll-spy', () => {

    const observer = ref<IntersectionObserver>();
    const visibleHeadings = ref<string[]>([]);
    const activeHeadings = ref<string[]>([]);


    const observerCallback = (entries: IntersectionObserverEntry[]) => {
        entries.forEach((entry) => {
            const id = entry.target.id;
            if (entry.isIntersecting) {
                visibleHeadings.value = [...visibleHeadings.value, id];
            } else {
                visibleHeadings.value = visibleHeadings.value.filter(h => h !== id);
            }
        })
    }

    const updateHeadings = (headings: Element[]) => {
        headings.forEach((heading) => {
            if (!observer.value) {
                return;
            }

            observer.value.observe(heading);
        })
    }

    watch(visibleHeadings, (val, oldVal) => {
        if (val.length === 0) {
            activeHeadings.value = oldVal;
        } else {
            activeHeadings.value = val;
        }
    })

    // Create intersection observer
    onBeforeMount(() => (observer.value = new IntersectionObserver(observerCallback)));

    // Destroy it
    onBeforeUnmount(() => observer.value?.disconnect());

    return {
        visibleHeadings,
        activeHeadings,
        updateHeadings
    }
});
