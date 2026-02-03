import { AIInsightsBanner } from "../components/AIInsightsBanner";
import { BadgesRow } from "../components/BadgesRow";
import { CityMap3D } from "../components/CityMap3D";
import { ClientOnlyCalendar, ClientOnlyMap } from "../components/ClientOnlyWidgets";
import { GlassCard } from "../components/GlassCard";
import { PropertyCard } from "../components/PropertyCard";
import { RevenueChart } from "../components/RevenueChart";
import { RightSidebar } from "../components/RightSidebar";
import { TransactionHistory } from "../components/TransactionHistory";
import { TenantProfilesModal } from "../components/TenantProfilesModal";
import { propertyCards } from "../lib/mockData";

export default function HomePage() {
  return (
    <div className="mx-auto flex max-w-screen-xl flex-col gap-8">
      <section className="flex flex-col gap-3">
        <h2 className="text-2xl font-semibold text-[var(--text-primary)]">Main page</h2>
        <AIInsightsBanner />
      </section>

      <section className="grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-4">
          <div className="grid gap-4 md:grid-cols-3">
            {propertyCards.map((property, index) => (
              <PropertyCard
                key={property.id}
                name={property.name}
                avatar={property.avatar}
                price={property.price}
                trend={property.trend}
                maintenanceRisk={index === 1}
              />
            ))}
          </div>
          <GlassCard className="h-[260px] p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-[var(--text-primary)]">
                  3D Portfolio Overview
                </p>
                <p className="text-xs text-[var(--text-muted)]">
                  Real-time property pins with dynamic lighting
                </p>
              </div>
              <button
                type="button"
                className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs text-[var(--text-primary)] shadow-glass hover:scale-105"
              >
                View 3D map
              </button>
            </div>
            <div className="mt-3 h-[190px] rounded-2xl border border-white/15 bg-white/5">
              <CityMap3D />
            </div>
          </GlassCard>
        </div>
        <div className="space-y-4">
          <BadgesRow />
          <RevenueChart />
          <GlassCard>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-[var(--text-primary)]">
                  AI Priority Feed
                </p>
                <p className="text-xs text-[var(--text-muted)]">
                  Live websocket placeholder: feed streaming
                </p>
              </div>
              <span className="rounded-full bg-emerald-500/20 px-2 py-1 text-xs text-emerald-200">
                Live
              </span>
            </div>
            <div className="mt-3 space-y-2 text-xs text-[var(--text-muted)]">
              <p>• Auto-reminders scheduled for 6 tenants.</p>
              <p>• Maintenance risk detected in Unit 12B.</p>
              <p>• Occupancy forecast improved by 4%.</p>
            </div>
          </GlassCard>
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-[1.6fr_0.8fr]">
        <TransactionHistory />
        <div className="lg:justify-self-end lg:max-w-[320px]">
          <RightSidebar />
        </div>
      </section>

      <section className="grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-4">
          <ClientOnlyCalendar />
          <div className="glass-panel rounded-3xl p-4">
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold text-[var(--text-primary)]">
                Tenant profiles
              </p>
              <TenantProfilesModal />
            </div>
            <p className="mt-2 text-xs text-[var(--text-muted)]">
              Secure role-based views and smart identity verification.
            </p>
          </div>
        </div>
        <div className="space-y-4">
          <ClientOnlyMap />
          <GlassCard>
            <p className="text-sm font-semibold text-[var(--text-primary)]">
              Security &amp; Auth
            </p>
            <p className="mt-2 text-xs text-[var(--text-muted)]">
              Mock login, admin/tenant roles, MFA readiness, and audit trails.
            </p>
            <button
              type="button"
              className="mt-3 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs text-[var(--text-primary)] shadow-glass hover:scale-105"
            >
              View access controls
            </button>
          </GlassCard>
        </div>
      </section>
    </div>
  );
}
