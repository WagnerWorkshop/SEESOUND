export function createSelectOptions(entries, selected) {
    const fragment = document.createDocumentFragment()
    for (const entry of entries) {
        const option = document.createElement('option')
        option.value = String(entry.value)
        option.textContent = String(entry.label ?? entry.value)
        if (entry.title) option.title = entry.title
        if (String(entry.value) === String(selected)) option.selected = true
        fragment.appendChild(option)
    }
    return fragment
}
