/* js/components/bikeCard.js */

import { getAllByIndex } from '../db.js';
import { conditionBadge, statusBadge } from './conditionBadge.js';
import { navigate } from '../router.js';

export async function renderBikeGrid(container, bikes) {
  /* Fetch part condition counts for all bikes in parallel */
  const counts = await Promise.all(bikes.map(b => getConditionCounts(b.id)));

  container.innerHTML = bikes.map((bike, i) => bikeCardHTML(bike, counts[i])).join('');

  container.querySelectorAll('.bike-card').forEach(card => {
    card.addEventListener('click', () => navigate(`/bikes/${card.dataset.id}`));
  });
}

async function getConditionCounts(bikeId) {
  const parts = await getAllByIndex('parts', 'bikeId', bikeId);
  return parts.reduce((acc, p) => {
    acc[p.condition] = (acc[p.condition] || 0) + 1;
    return acc;
  }, {});
}

function bikeCardHTML(bike, counts) {
  const replace = counts.replace || 0;
  const mia     = counts.mia     || 0;
  const inspect = counts.inspect || 0;

  const alertCount = replace + mia;
  const isMia = bike.status === 'mia';

  const svcDate = bike.lastServiceDate
    ? `Last service: ${new Date(bike.lastServiceDate).toLocaleDateString()}`
    : 'No service logged';

  return `
    <div class="bike-card${isMia ? ' mia' : ''}" data-id="${bike.id}" tabindex="0" role="button" aria-label="${bike.name}">
      <div class="bike-card-id">${bike.id.toUpperCase()}</div>
      <div class="bike-card-name">${bike.name}</div>
      <div class="bike-card-type">${bike.subtype}</div>
      <div class="bike-card-badges">
        ${statusBadge(bike.status)}
        ${replace > 0 ? conditionBadge('replace') + ` ×${replace}` : ''}
        ${mia     > 0 ? conditionBadge('mia')     + ` ×${mia}`     : ''}
        ${inspect > 0 ? conditionBadge('inspect')  + ` ×${inspect}` : ''}
      </div>
      ${alertCount > 0 ? `
        <div class="bike-card-alert">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" aria-hidden="true">
            <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/>
            <line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/>
          </svg>
          ${alertCount} part${alertCount > 1 ? 's' : ''} need attention
        </div>` : ''}
      <div class="bike-card-service">${svcDate}</div>
    </div>`;
}
